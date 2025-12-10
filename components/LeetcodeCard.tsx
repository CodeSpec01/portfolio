"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// === Types based on your JSON ===
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
  contestBadges?: any | null;
}

// === The Data Provided ===
const rawData: UserContestData = {
  contestAttend: 17,
  contestRating: 1808.6633190923817,
  contestGlobalRanking: 56164,
  totalParticipants: 796958,
  contestTopPercentage: 7.25,
  contestParticipation: [
    { attended: true, rating: 1545.053, ranking: 6796, trendDirection: "UP", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 4109, contest: { title: "Biweekly Contest 160", startTime: 1751725800 } },
    { attended: true, rating: 1649.395, ranking: 1753, trendDirection: "UP", problemsSolved: 3, totalProblems: 4, finishTimeInSeconds: 4708, contest: { title: "Biweekly Contest 161", startTime: 1752935400 } },
    { attended: true, rating: 1667.777, ranking: 5806, trendDirection: "UP", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 2902, contest: { title: "Weekly Contest 459", startTime: 1752978600 } },
    { attended: true, rating: 1609.413, ranking: 25469, trendDirection: "DOWN", problemsSolved: 0, totalProblems: 4, finishTimeInSeconds: 0, contest: { title: "Weekly Contest 460", startTime: 1753583400 } },
    { attended: true, rating: 1626.755, ranking: 6225, trendDirection: "UP", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 3851, contest: { title: "Biweekly Contest 165", startTime: 1757773800 } },
    { attended: true, rating: 1656.38, ranking: 4619, trendDirection: "UP", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 479, contest: { title: "Weekly Contest 468", startTime: 1758421800 } },
    { attended: true, rating: 1698.704, ranking: 2323, trendDirection: "UP", problemsSolved: 4, totalProblems: 4, finishTimeInSeconds: 5667, contest: { title: "Biweekly Contest 166", startTime: 1758983400 } },
    { attended: true, rating: 1664.984, ranking: 15438, trendDirection: "DOWN", problemsSolved: 1, totalProblems: 4, finishTimeInSeconds: 2763, contest: { title: "Weekly Contest 469", startTime: 1759026600 } },
    { attended: true, rating: 1660.51, ranking: 9638, trendDirection: "DOWN", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 3128, contest: { title: "Weekly Contest 471", startTime: 1760236200 } },
    { attended: true, rating: 1716.488, ranking: 1483, trendDirection: "UP", problemsSolved: 3, totalProblems: 4, finishTimeInSeconds: 3725, contest: { title: "Weekly Contest 472", startTime: 1760841000 } },
    { attended: true, rating: 1759.992, ranking: 1677, trendDirection: "UP", problemsSolved: 4, totalProblems: 4, finishTimeInSeconds: 4926, contest: { title: "Biweekly Contest 168", startTime: 1761402600 } },
    { attended: true, rating: 1779.516, ranking: 3364, trendDirection: "UP", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 383, contest: { title: "Weekly Contest 474", startTime: 1762050600 } },
    { attended: true, rating: 1776.522, ranking: 5882, trendDirection: "DOWN", problemsSolved: 2, totalProblems: 4, finishTimeInSeconds: 523, contest: { title: "Biweekly Contest 169", startTime: 1762612200 } },
    { attended: true, rating: 1778.965, ranking: 5040, trendDirection: "UP", problemsSolved: 3, totalProblems: 4, finishTimeInSeconds: 6568, contest: { title: "Weekly Contest 475", startTime: 1762655400 } },
    { attended: true, rating: 1814.837, ranking: 1751, trendDirection: "UP", problemsSolved: 3, totalProblems: 4, finishTimeInSeconds: 2022, contest: { title: "Weekly Contest 476", startTime: 1763260200 } },
    { attended: true, rating: 1760.768, ranking: 24661, trendDirection: "DOWN", problemsSolved: 0, totalProblems: 4, finishTimeInSeconds: 0, contest: { title: "Biweekly Contest 170", startTime: 1763821800 } },
    { attended: true, rating: 1808.663, ranking: 1213, trendDirection: "UP", problemsSolved: 3, totalProblems: 4, finishTimeInSeconds: 3479, contest: { title: "Weekly Contest 477", startTime: 1763865000 } },
  ],
  contestBadges: null,
};

// Helper: Format unix timestamp to Year
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.getFullYear().toString(); // Return string for recharts tickFormatter
};

// Helper: Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data: Participation = payload[0].payload;
    const date = new Date(data.contest.startTime * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div className="bg-[#1c1c1c] border border-white/10 p-3 rounded-lg shadow-xl text-sm">
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
  const data = rawData.contestParticipation;
  
  // Calculate domain for Y Axis (add some padding)
  const minRating = Math.min(...data.map((d) => d.rating));
  const maxRating = Math.max(...data.map((d) => d.rating));
  const domainMin = Math.floor(minRating / 50) * 50 - 50;
  const domainMax = Math.ceil(maxRating / 50) * 50 + 50;

  return (
    <div className="w-full - h-full max-w-4xl mx-auto p-px rounded-3xl bg-linear-to-r from-[#ff7a18] via-[#ffb199] to-[#ffd59a] shadow-2xl">
      <div className="w-full h-full p-6 bg-black rounded-3xl border border-white/5">
      
      {/* Header Stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
            Contest Rating
          </h2>
          <div className="flex items-baseline items-center gap-2 mt-1">
            <span className="text-3xl font-bold text-white">
              {Math.round(rawData.contestRating).toLocaleString()}
            </span>
            <span className="text-sm text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded-full border border-white/5">
              Top {rawData.contestTopPercentage}%
            </span>
          </div>
        </div>
        
        <div className="flex gap-6 text-sm">
           <div className="text-right">
              <div className="text-neutral-500">Global Rank</div>
              <div className="text-white font-mono">{rawData.contestGlobalRanking.toLocaleString()}</div>
           </div>
           <div className="text-right">
              <div className="text-neutral-500">Attended</div>
              <div className="text-white font-mono">{rawData.contestAttend}</div>
           </div>
        </div>
      </div>

      {/* The Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
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
              domain={[domainMin, domainMax]}
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
              stroke="#ffa116" // LeetCode Orange/Yellow
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