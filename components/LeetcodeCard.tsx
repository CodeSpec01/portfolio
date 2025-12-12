"use client";
import { leetcodeUsername } from "@/constants/constants";
import React, { useMemo, useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

// === Types ===
interface Contest {
  title: string;
  startTime: number;
}

interface Participation {
  attended: boolean;
  rating: number;
  ranking: number;
  trendDirection: "UP" | "DOWN";
  problemsSolved: number;
  totalProblems: number;
  finishTimeInSeconds: number;
  contest: Contest;
}

interface UserContestData {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
  contestParticipation: Participation[];
}

// === Configuration ===
const CACHE_KEY = 'leetcode_contest_history_v1';
const CACHE_DURATION = 1000 * 60 * 60 * 6; // 6 Hours

// === Custom Hook for Data Fetching ===
function useContestHistory(username: string) {
  const [data, setData] = useState<UserContestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Check Cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        // 2. Fetch from API (Using Alfa LeetCode API which supports contest data)
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);

        if (!response.ok) {
          // Handle specific 404 or other errors
          if (response.status === 404) throw new Error("User not found");
          throw new Error('Failed to fetch contest data');
        }

        const result = await response.json();

        // 3. Save to Cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: result,
          timestamp: Date.now()
        }));

        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { rawData: data, loading, error };
}

// Helper: Format unix timestamp to Year
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.getFullYear().toString();
};

// Helper: Custom Tooltip Component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: Participation = payload[0].payload;
    const date = new Date(data.contest.startTime * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div className="bg-[#1c1c1c] border border-white/10 p-3 rounded-lg shadow-xl text-sm z-50">
        <p className="text-white font-medium mb-1">{data.contest.title}</p>
        <p className="text-neutral-400 text-xs mb-2">{date}</p>
        <div className="space-y-1">
          <p className="flex justify-between gap-4">
            <span className="text-neutral-400">Rating:</span>
            <span className="text-yellow-500 font-mono font-bold">
              {Math.round(data.rating)}
            </span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-neutral-400">Rank:</span>
            <span className="text-white font-mono">
              #{data.ranking.toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between gap-4">
            <span className="text-neutral-400">Solved:</span>
            <span className="text-white font-mono">
              {data.problemsSolved}/{data.totalProblems}
            </span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export default function ContestRatingChart() {
  const { rawData, loading, error } = useContestHistory(leetcodeUsername);

  // === Process Data with useMemo ===
  const { chartData, domain, currentRating, topPercentage, globalRank, attended } = useMemo(() => {
    // Default / Empty State
    if (!rawData || !rawData.contestParticipation) {
      return {
        chartData: [],
        domain: [1500, 1500], // Default scale
        currentRating: 0,
        topPercentage: 0,
        globalRank: 0,
        attended: 0
      };
    }

    const data = rawData.contestParticipation.filter(p => p.attended); // Only show attended contests

    // Calculate domain for Y Axis
    if (data.length === 0) return { chartData: [], domain: [1500, 2000], currentRating: 0, topPercentage: 0, globalRank: 0, attended: 0 };

    const minRating = Math.min(...data.map((d) => d.rating));
    const maxRating = Math.max(...data.map((d) => d.rating));
    const domainMin = Math.floor(minRating / 50) * 50 - 50;
    const domainMax = Math.ceil(maxRating / 50) * 50 + 50;

    return {
      chartData: data,
      domain: [domainMin, domainMax],
      currentRating: rawData.contestRating,
      topPercentage: rawData.contestTopPercentage,
      globalRank: rawData.contestGlobalRanking,
      attended: rawData.contestAttend
    };
  }, [rawData]);

  return (
    // Relative container for overlays
    <div className="relative w-full h-full max-w-4xl mx-auto p-px rounded-3xl bg-linear-to-r from-[#ff7a18] via-[#ffb199] to-[#ffd59a] shadow-2xl overflow-hidden">

      {/* === OVERLAYS === */}

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm rounded-3xl transition-all">
          <Loader />
        </div>
      )}

      {/* Error Overlay */}
      {error && !loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md rounded-3xl p-4 text-center">
          <div className="text-red-400 font-bold text-lg mb-2">Something went wrong while fetching data</div>
        </div>
      )}

      {/* === CONTENT === */}
      <div className={`w-full h-full p-6 bg-black rounded-3xl border border-white/5 ${(loading || error) ? 'opacity-40' : ''}`}>

        {/* Header Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
              Contest Rating
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-3xl font-bold text-white">
                {loading ? "..." : Math.round(currentRating).toLocaleString()}
              </span>
              {!loading && !error && (
                <span className="text-sm text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-white/5">
                  Top {topPercentage}%
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <div className="text-right">
              <div className="text-neutral-500">Global Rank</div>
              <div className="text-white font-mono">
                {loading ? "..." : globalRank.toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-neutral-500">Attended</div>
              <div className="text-white font-mono">
                {loading ? "..." : attended}
              </div>
            </div>
          </div>
        </div>

        {/* The Chart */}
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                vertical={false}
                stroke="#333"
                strokeDasharray="3 3"
                opacity={0.5}
              />

              <XAxis
                dataKey="contest.startTime"
                tickFormatter={formatDate}
                stroke="#525252"
                tick={{ fill: "#737373", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                minTickGap={50}
              />

              <YAxis
                domain={domain}
                stroke="#525252"
                tick={{ fill: "#737373", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickCount={6}
              />

              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#fff', strokeWidth: 1, opacity: 0.2 }} />

              <Line
                type="monotone"
                dataKey="rating"
                stroke="#ffa116"
                strokeWidth={2}
                dot={{ r: 3, fill: "#ffa116", strokeWidth: 0 }}
                activeDot={{ r: 6, fill: "#ffa116", stroke: "#000", strokeWidth: 2 }}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}