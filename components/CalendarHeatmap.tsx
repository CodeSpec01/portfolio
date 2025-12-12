'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Loader from './Loader';
import { SiLeetcode } from 'react-icons/si';

// --- Configuration ---
const THEME = {
  text: 'text-[#9ca3af]',
  bg: 'bg-[#1a1a1a]',
  tooltipBg: 'bg-[#333333]',
  levels: [
    'bg-[#2d2d2d]',
    'bg-[#0e4429]',
    'bg-[#006d32]',
    'bg-[#26a641]',
    'bg-[#39d353]',
  ],
};

const CACHE_KEY = 'leetcode_metrics_v1';
const CACHE_DURATION = 1000 * 60 * 60 * 6; // 6 Hours

const getIntensity = (count: number) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
};

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// --- Types ---
interface DayData {
  date: string;
  count: number;
  level: number;
  isPlaceholder?: boolean;
}

interface LeetCodeData {
  totalActiveDays: number;
  activeYears: number[];
  submissionCalendar: string;
  streak: number;
}

// --- Hook (Same as before) ---
function useLeetCodeStats(username: string) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true); // Start true
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          const { data: cachedData, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION) {
            setData(cachedData);
            setLoading(false);
            return;
          }
        }

        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();

        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: result,
          timestamp: Date.now()
        }));

        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  return { rawData: data, loading, error };
}

export default function CalendarHeatmap() {
  const { rawData, loading, error } = useLeetCodeStats('codespec');

  // --- Process Data (Handle Nulls for Loading State) ---
  const { weeks, year, totalActiveDays, streak } = useMemo(() => {
    // 1. Determine the target year
    // If data exists, use it. If loading/error, use current year as placeholder.
    const targetYear = rawData?.activeYears?.length
      ? rawData.activeYears[rawData.activeYears.length - 1]
      : new Date().getFullYear();

    const normalizedMap = new Map<string, number>();

    // 2. Parse data ONLY if it exists
    if (rawData) {
      const calendarMap: Record<string, number> = JSON.parse(rawData.submissionCalendar);
      Object.entries(calendarMap).forEach(([ts, count]) => {
        const date = new Date(parseInt(ts) * 1000);
        const key = date.toISOString().split('T')[0];
        normalizedMap.set(key, count);
      });
    }

    // 3. Generate the Grid (Works for both Data and No Data)
    const startDate = new Date(`${targetYear}-01-01`);
    const endDate = new Date(`${targetYear}-12-31`);
    const allDays: DayData[] = [];

    // Adjust start to Monday
    let startDayOfWeek = startDate.getDay();
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    for (let i = 0; i < startDayOfWeek; i++) {
      allDays.push({ date: `prev-${i}`, count: 0, level: 0, isPlaceholder: true });
    }

    // Fill days
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const key = d.toISOString().split('T')[0];
      const count = normalizedMap.get(key) || 0; // Will be 0 if map is empty (loading state)
      allDays.push({ date: key, count, level: getIntensity(count) });
    }

    const weeksArr: DayData[][] = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeksArr.push(allDays.slice(i, i + 7));
    }

    return {
      weeks: weeksArr,
      year: targetYear,
      totalActiveDays: rawData?.totalActiveDays || 0,
      streak: rawData?.streak || 0
    };
  }, [rawData]);

  return (
    // relative container is CRITICAL for absolute positioning the overlays
    <div className={`relative w-full max-w-5xl mx-auto p-8 rounded-xl border bg-black/30 shadow-sm ${THEME.bg} overflow-hidden`}>

      {/* --- OVERLAYS --- */}

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl transition-all">
          <Loader />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="absolute inset-0 z-30 bg-zinc-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
          <SiLeetcode className="text-gray-600 text-4xl mb-4" />
          <p className="text-gray-400 text-sm mb-4">Could not load Leetcode Calendar data.</p>
        </div>
      )}


      {/* Header Stats */}
      <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-8 ${(loading || error) ? 'opacity-50' : ''}`}>
        <div>
          <h1 className='mb-5 text-gray-200'>Leetcode Heatmap</h1>
          <h2 className="text-xl font-bold text-gray-100">
            {loading ? "..." : totalActiveDays} submissions in {year}
          </h2>
          <div className={`flex gap-4 text-sm mt-1 ${THEME.text}`}>
            <span>Total active days: <strong className="text-gray-200">{loading ? '-' : totalActiveDays}</strong></span>
            <span>Max streak: <strong className="text-gray-200">{loading ? '-' : streak}</strong></span>
          </div>
        </div>
      </div>

      {/* HEATMAP SCROLL CONTAINER */}
      <div className={`w-full pb-4 scrollbar-hide ${(loading || error) ? 'opacity-50' : ''}`}>
        <div className="flex min-w-max gap-[3px]">
          {/* Y-Axis Labels */}
          <div className={`flex flex-col gap-[3px] text-[10px] ${THEME.text} mt-5 mr-2 leading-2.5`}>
            <div className="h-2.5" />
            <div className="h-2.5 flex items-center">Mon</div>
            <div className="h-2.5" />
            <div className="h-2.5 flex items-center">Wed</div>
            <div className="h-2.5" />
            <div className="h-2.5 flex items-center">Fri</div>
            <div className="h-2.5" />
          </div>

          {/* Weeks Columns */}
          {weeks.map((week, weekIndex) => {
            const firstDay = week.find(d => !d.isPlaceholder);
            const dateObj = firstDay ? new Date(firstDay.date) : null;
            const currentMonthIndex = dateObj ? dateObj.getMonth() : null;
            const prevWeek = weeks[weekIndex - 1];
            const prevDay = prevWeek ? prevWeek.find(d => !d.isPlaceholder) : null;
            const prevDateObj = prevDay ? new Date(prevDay.date) : null;
            const prevMonthIndex = prevDateObj ? prevDateObj.getMonth() : null;
            const isNewMonth = currentMonthIndex !== null && currentMonthIndex !== prevMonthIndex;

            return (
              <div
                key={weekIndex}
                className={`flex flex-col gap-[3px] ${isNewMonth && weekIndex !== 0 ? 'ml-4' : ''}`}
              >
                <div className={`h-[15px] text-[10px] mb-1 ${THEME.text} relative`}>
                  {(weekIndex === 0 || isNewMonth) && (
                    <span className="absolute top-0 left-0 whitespace-nowrap">
                      {currentMonthIndex !== null ? MONTH_LABELS[currentMonthIndex] : ""}
                    </span>
                  )}
                </div>

                {week.map((day, dayIndex) => (
                  day.isPlaceholder ? (
                    <div key={`placeholder-${dayIndex}`} className="w-2.5 h-2.5" />
                  ) : (
                    <HeatmapCell key={day.date} day={day} />
                  )
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className={`flex justify-end items-center gap-2 text-xs ${THEME.text} mt-4 ${(loading || error) ? 'opacity-50' : ''}`}>
        <span>Less</span>
        <div className="flex gap-[3px]">
          {[0, 1, 2, 3, 4].map(level => (
            <div key={level} className={`w-2.5 h-2.5 rounded-xs ${THEME.levels[level]}`} />
          ))}
        </div>
        <span>More</span>
      </div>

    </div>
  );
}

// ... HeatmapCell component remains exactly the same ...
function HeatmapCell({ day }: { day: DayData }) {
  return (
    <div className="relative group">
      <div
        className={`w-2.5 h-2.5 rounded-xs ${THEME.levels[day.level]} border border-transparent hover:border-gray-400`}
      />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-40 pointer-events-none">
        <div className={`${THEME.tooltipBg} p-2 rounded text-xs shadow-xl border border-gray-600 whitespace-nowrap z-50`}>
          <div className="text-gray-300 font-bold mb-1 text-center">
            {day.count} submissions
          </div>
          <div className="text-gray-400 text-[10px] text-center">
            {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
        <div className={`w-2 h-2 ${THEME.tooltipBg} border-r border-b border-gray-600 rotate-45 -mt-1`}></div>
      </div>
    </div>
  );
}