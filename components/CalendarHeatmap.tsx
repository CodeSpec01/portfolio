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

interface MonthBlock {
  month: number;
  year: number;
  columns: DayData[][];
}

interface LeetCodeData {
  totalActiveDays: number;
  activeYears: number[];
  submissionCalendar: string;
  streak: number;
}

// --- Hook ---
function useLeetCodeStats(username: string) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
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

  // --- Process Data into distinct Month Blocks ---
  const { monthsBlocks, totalActiveDays, streak } = useMemo(() => {
    const normalizedMap = new Map<string, number>();

    if (rawData && rawData.submissionCalendar && rawData.submissionCalendar !== "undefined") {
      const calendarMap: Record<string, number> = JSON.parse(rawData.submissionCalendar);
      Object.entries(calendarMap).forEach(([ts, count]) => {
        const date = new Date(parseInt(ts) * 1000);
        const key = date.toISOString().split('T')[0];
        normalizedMap.set(key, count);
      });
    }

    const now = new Date();
    // End Date is today
    const endDateObj = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    // Start Date is exactly one year ago from today
    const startDateObj = new Date(Date.UTC(now.getFullYear() - 1, now.getMonth(), now.getDate()));

    const generatedBlocks: MonthBlock[] = [];

    // Start iterating from the 1st of the month exactly one year ago
    const currentMonthDate = new Date(Date.UTC(startDateObj.getUTCFullYear(), startDateObj.getUTCMonth(), 1));
    const endMonthDate = new Date(Date.UTC(endDateObj.getUTCFullYear(), endDateObj.getUTCMonth(), 1));

    while (currentMonthDate <= endMonthDate) {
      const year = currentMonthDate.getUTCFullYear();
      const month = currentMonthDate.getUTCMonth();
      const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

      const columns: DayData[][] = [];
      let currentColumn: DayData[] = Array(7).fill({ isPlaceholder: true, date: '', count: 0, level: 0 });

      for (let day = 1; day <= daysInMonth; day++) {
        const dateObj = new Date(Date.UTC(year, month, day));
        const dayOfWeek = dateObj.getUTCDay(); // 0 (Sun) to 6 (Sat)
        const dateStr = dateObj.toISOString().split('T')[0];

        // If the date falls outside our strict 1-year window, it remains a placeholder
        const isOutOfRange = dateObj < startDateObj || dateObj > endDateObj;
        const count = isOutOfRange ? 0 : (normalizedMap.get(dateStr) || 0);

        currentColumn[dayOfWeek] = {
          date: dateStr,
          count,
          level: isOutOfRange ? 0 : getIntensity(count),
          isPlaceholder: isOutOfRange
        };

        // If it's Saturday (end of week) or the last day of the month, finalize the column
        if (dayOfWeek === 6 || day === daysInMonth) {
          // Only push the column if it contains at least one day within our 1-year window.
          // This prevents empty weeks from showing at the very beginning or end.
          const hasVisibleDays = currentColumn.some(d => !d.isPlaceholder);
          if (hasVisibleDays) {
            columns.push([...currentColumn]);
          }
          currentColumn = Array(7).fill({ isPlaceholder: true, date: '', count: 0, level: 0 });
        }
      }

      if (columns.length > 0) {
        generatedBlocks.push({ year, month, columns });
      }

      // Move to next month
      currentMonthDate.setUTCMonth(currentMonthDate.getUTCMonth() + 1);
    }

    return {
      monthsBlocks: generatedBlocks,
      totalActiveDays: rawData?.totalActiveDays || 0,
      streak: rawData?.streak || 0
    };
  }, [rawData]);

  return (
    <div className='w-[95%] mx-auto bg-linear-to-r from-[#ff7a18] via-[#ffb199] to-[#ffd59a] p-px rounded-xl'>
      <div className={`relative w-full mx-auto p-8 rounded-xl bg-linear-to-t from-black/90 via-40% via-black/20 to-[#350066] shadow-sm ${THEME.bg} overflow-hidden`}>

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
        <div className={`w-full flex flex-col sm:flex-row sm:items-end justify-start mb-6 ${(loading || error) ? 'opacity-50' : ''}`}>
          <div>
            <h1 className='mb-2 md:mb-5 text-xl md:text-2xl text-gray-200'>Leetcode Heatmap</h1>
            <h2 className="text-sm md:text-base font-bold text-gray-100">
              {loading ? "..." : totalActiveDays} submissions in the past year
            </h2>
            <div className={`flex gap-4 text-xs md:text-sm mt-1 ${THEME.text}`}>
              <span>Total active days: <strong className="text-gray-200">{loading ? '-' : totalActiveDays}</strong></span>
              <span>Max streak: <strong className="text-gray-200">{loading ? '-' : streak}</strong></span>
            </div>
          </div>
        </div>

        {/* HEATMAP SCROLL CONTAINER - Forced scroll on all devices to prevent clipping */}
        <div className={`w-full pb-6 lg:overflow-x-visible overflow-x-scroll scrollbar-hide ${(loading || error) ? 'opacity-50' : ''}`}>
          <div className="flex justify-start md:justify-center min-w-max gap-3 md:gap-4 px-2">

            {monthsBlocks.map((monthBlock, mIdx) => (
              <div key={`month-${mIdx}`} className="flex flex-col items-start">
                {/* Month Grid */}
                <div className="flex gap-[3px] md:gap-1">
                  {monthBlock.columns.map((col, cIdx) => (
                    <div key={`col-${mIdx}-${cIdx}`} className="flex flex-col gap-[3px] md:gap-1">
                      {col.map((day, dIdx) => (
                        day.isPlaceholder ? (
                          // Transparent placeholder maintains structural layout
                          <div key={`placeholder-${mIdx}-${cIdx}-${dIdx}`} className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        ) : (
                          <HeatmapCell key={day.date} day={day} />
                        )
                      ))}
                    </div>
                  ))}
                </div>

                {/* Month Label Base */}
                <span className={`text-sm md:text-lg mt-2 ${THEME.text} w-full text-left`}>
                  {MONTH_LABELS[monthBlock.month]}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* Legend */}
        <div className={`flex justify-end items-center gap-2 text-xs ${THEME.text} mt-2 ${(loading || error) ? 'opacity-50' : ''}`}>
          <span>Less</span>
          <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(level => (
              <div key={level} className={`w-3 h-3 rounded-xs ${THEME.levels[level]}`} />
            ))}
          </div>
          <span>More</span>
        </div>

      </div>
    </div>
  );
}

function HeatmapCell({ day }: { day: DayData }) {
  return (
    <div className="relative group">
      <div
        className={`w-3 h-3 md:w-[1vw] md:h-[1vw] rounded-sm ${THEME.levels[day.level]} border border-transparent hover:border-gray-400 transition-colors duration-150`}
      />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-none">
        <div className={`${THEME.tooltipBg} p-2 rounded text-xs shadow-xl border border-gray-600 whitespace-nowrap z-50`}>
          <div className="text-gray-300 font-bold mb-1 text-center">
            {day.count} submissions
          </div>
          <div className="text-gray-400 text-[10px] text-center">
            {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
          </div>
        </div>
        <div className={`w-2 h-2 ${THEME.tooltipBg} border-r border-b border-gray-600 rotate-45 -mt-1`}></div>
      </div>
    </div>
  );
}