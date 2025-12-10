'use client';

import React, { useMemo } from 'react';

// --- Configuration ---

// Exact LeetCode Dark Theme Colors extracted from your images
const THEME = {
  text: 'text-[#9ca3af]',      // Light gray text for axis labels
  bg: 'bg-[#1a1a1a]',          // Dark background for the card (approximate from screenshot)
  tooltipBg: 'bg-[#333333]',   // Dark gray for tooltip
  levels: [
    'bg-[#2d2d2d]', // Level 0: Dark gray (Empty) - matches the subtle dark squares
    'bg-[#0e4429]', // Level 1: Deep green
    'bg-[#006d32]', // Level 2: Mid green
    'bg-[#26a641]', // Level 3: Bright green
    'bg-[#39d353]', // Level 4: Neon green (Max intensity)
  ],
};

const getIntensity = (count: number) => {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
};

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// --- Mock Data ---
const rawData = {
  activeYears: [2025],
  streak: 122,
  totalActiveDays: 228,
  submissionCalendar: '{"1735776000": 7, "1735862400": 4, "1736121600": 6, "1736208000": 9, "1736294400": 7, "1736380800": 5, "1736467200": 14, "1736553600": 17, "1736640000": 1, "1736726400": 1, "1736812800": 19, "1736899200": 26, "1736985600": 11, "1737072000": 8, "1737158400": 14, "1737244800": 11, "1737331200": 3, "1737417600": 16, "1737504000": 9, "1737590400": 8, "1737676800": 2, "1737763200": 1, "1737849600": 3, "1737936000": 2, "1738022400": 10, "1738108800": 4, "1738195200": 1, "1738281600": 8, "1738368000": 6, "1738454400": 7, "1738540800": 2, "1738627200": 7, "1738713600": 7, "1738800000": 7, "1738886400": 7, "1738972800": 1, "1739059200": 14, "1739145600": 4, "1739232000": 1, "1739318400": 5, "1739404800": 9, "1739491200": 1, "1739577600": 2, "1739664000": 1, "1739750400": 2, "1739836800": 1, "1739923200": 5, "1740009600": 2, "1740096000": 3, "1740182400": 1, "1740268800": 1, "1740355200": 2, "1740441600": 1, "1740528000": 1, "1740700800": 2, "1740787200": 3, "1740873600": 1, "1740960000": 1, "1741046400": 1, "1741132800": 1, "1741219200": 1, "1741305600": 3, "1741392000": 6, "1741478400": 5, "1741564800": 1, "1741651200": 1, "1741737600": 1, "1741824000": 2, "1741910400": 1, "1741996800": 2, "1742083200": 1, "1742169600": 1, "1742256000": 1, "1742342400": 2, "1742428800": 1, "1742515200": 1, "1742601600": 1, "1749600000": 5, "1749686400": 15, "1749772800": 8, "1749859200": 2, "1749945600": 2, "1750032000": 4, "1750377600": 3, "1750809600": 15, "1750896000": 3, "1751587200": 2, "1751673600": 5, "1751760000": 23, "1751846400": 13, "1751932800": 13, "1752019200": 7, "1752105600": 5, "1752278400": 3, "1752364800": 3, "1752537600": 2, "1752624000": 1, "1752883200": 14, "1752969600": 41, "1753056000": 16, "1753142400": 6, "1753228800": 4, "1753401600": 15, "1753488000": 5, "1753574400": 15, "1753747200": 4, "1753833600": 8, "1753920000": 2, "1754006400": 19, "1754092800": 8, "1754179200": 6, "1754265600": 3, "1754352000": 12, "1754438400": 6, "1754524800": 10, "1754611200": 4, "1754697600": 2, "1754784000": 1, "1754870400": 4, "1754956800": 6, "1755043200": 4, "1755129600": 9, "1755216000": 1, "1755302400": 10, "1755388800": 1, "1755475200": 1, "1755561600": 2, "1755648000": 8, "1755734400": 1, "1755820800": 3, "1755907200": 62, "1755993600": 1, "1756080000": 1, "1756166400": 11, "1756252800": 9, "1756339200": 27, "1756425600": 1, "1756512000": 10, "1756598400": 2, "1756684800": 3, "1756771200": 16, "1756857600": 12, "1756944000": 1, "1757030400": 1, "1757116800": 8, "1757203200": 1, "1757289600": 2, "1757376000": 5, "1757462400": 2, "1757548800": 16, "1757635200": 1, "1757721600": 8, "1757808000": 13, "1757894400": 1, "1757980800": 4, "1758067200": 16, "1758153600": 21, "1758240000": 1, "1758326400": 3, "1758412800": 11, "1758499200": 1, "1758585600": 1, "1758672000": 1, "1758758400": 1, "1758844800": 4, "1758931200": 8, "1759017600": 10, "1759104000": 4, "1759190400": 11, "1759276800": 6, "1759363200": 21, "1759449600": 11, "1759536000": 10, "1759622400": 14, "1759708800": 1, "1759795200": 8, "1759881600": 12, "1759968000": 1, "1760054400": 11, "1760140800": 2, "1760227200": 3, "1760313600": 2, "1760400000": 5, "1760486400": 2, "1760572800": 4, "1760659200": 1, "1760745600": 8, "1760832000": 17, "1760918400": 18, "1761004800": 6, "1761091200": 1, "1761177600": 2, "1761264000": 15, "1761350400": 9, "1761436800": 1, "1761523200": 5, "1761609600": 4, "1761696000": 3, "1761782400": 2, "1761868800": 1, "1761955200": 4, "1762041600": 39, "1762128000": 1, "1762214400": 18, "1762300800": 12, "1762387200": 2, "1762473600": 3, "1762560000": 17, "1762646400": 9, "1762732800": 3, "1762819200": 3, "1762905600": 21, "1762992000": 12, "1763078400": 4, "1763164800": 3, "1763251200": 13, "1763337600": 15, "1763424000": 3, "1763510400": 6, "1763596800": 3, "1763683200": 1, "1763769600": 7, "1763856000": 4, "1763942400": 1, "1764028800": 3, "1764115200": 3, "1764201600": 4, "1764460800": 3}'
};

// --- Interfaces ---
interface DayData {
  date: string;
  count: number;
  level: number;
  isPlaceholder?: boolean;
}

export default function CalendarHeatmap() {
  
  // 1. Process Data
  const { weeks, year } = useMemo(() => {
    const calendarMap: Record<string, number> = JSON.parse(rawData.submissionCalendar);
    const normalizedMap = new Map<string, number>();
    const targetYear = rawData.activeYears[rawData.activeYears.length - 1];

    Object.entries(calendarMap).forEach(([ts, count]) => {
      const date = new Date(parseInt(ts) * 1000);
      const key = date.toISOString().split('T')[0];
      normalizedMap.set(key, count);
    });

    const startDate = new Date(`${targetYear}-01-01`);
    const endDate = new Date(`${targetYear}-12-31`);
    
    const allDays: DayData[] = [];
    
    // Adjust start to previous Monday (to align weeks Mon-Sun)
    let startDayOfWeek = startDate.getDay(); 
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    for (let i = 0; i < startDayOfWeek; i++) {
      allDays.push({ date: `prev-${i}`, count: 0, level: 0, isPlaceholder: true });
    }

    // Fill year
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const key = d.toISOString().split('T')[0];
      const count = normalizedMap.get(key) || 0;
      allDays.push({ date: key, count, level: getIntensity(count) });
    }

    // Chunk into Weeks
    const weeksArr: DayData[][] = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeksArr.push(allDays.slice(i, i + 7));
    }

    return { weeks: weeksArr, year: targetYear };
  }, []);

  return (
    <div className={`w-full max-w-5xl mx-auto p-8 rounded-xl border bg-black/30 shadow-sm ${THEME.bg}`}>
      
      {/* Header Stats */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
        <div>
          <h1 className='mb-5'>Leetcode Heatmap</h1>
          <h2 className="text-xl font-bold text-gray-100">
            {rawData.totalActiveDays} submissions in {year}
          </h2>
          <div className={`flex gap-4 text-sm mt-1 ${THEME.text}`}>
            <span>Total active days: <strong className="text-gray-200">{rawData.totalActiveDays}</strong></span>
            <span>Max streak: <strong className="text-gray-200">{rawData.streak}</strong></span>
          </div>
        </div>
      </div>

      {/* HEATMAP SCROLL CONTAINER */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex min-w-max gap-[3px]">
            
            {/* Y-Axis Labels (Days) */}
            <div className={`flex flex-col gap-[3px] text-[10px] ${THEME.text} mt-[20px] mr-2 leading-[10px]`}>
                <div className="h-[10px]" /> {/* Mon (Empty) */}
                <div className="h-[10px] flex items-center">Mon</div>
                <div className="h-[10px]" /> 
                <div className="h-[10px] flex items-center">Wed</div>
                <div className="h-[10px]" /> 
                <div className="h-[10px] flex items-center">Fri</div>
                <div className="h-[10px]" />
            </div>

            {/* Weeks Columns */}
            {weeks.map((week, weekIndex) => {
              const firstDay = week.find(d => !d.isPlaceholder);
              const dateObj = firstDay ? new Date(firstDay.date) : null;
              const currentMonthIndex = dateObj ? dateObj.getMonth() : null;

              // --- SEGREGATION LOGIC ---
              // Check if the month changed compared to the previous week
              const prevWeek = weeks[weekIndex - 1];
              const prevDay = prevWeek ? prevWeek.find(d => !d.isPlaceholder) : null;
              const prevDateObj = prevDay ? new Date(prevDay.date) : null;
              const prevMonthIndex = prevDateObj ? prevDateObj.getMonth() : null;

              const isNewMonth = currentMonthIndex !== null && currentMonthIndex !== prevMonthIndex;
              const showMonthLabel = weekIndex === 0 || isNewMonth;
              const monthLabel = currentMonthIndex !== null ? MONTH_LABELS[currentMonthIndex] : "";

              return (
                <div 
                  key={weekIndex} 
                  // Add a larger margin-left (ml-[16px]) if it's the start of a new month to create the gap
                  className={`flex flex-col gap-[3px] ${isNewMonth && weekIndex !== 0 ? 'ml-[16px]' : ''}`}
                >
                  
                  {/* Month Label Header */}
                  <div className={`h-[15px] text-[10px] mb-1 ${THEME.text} relative`}>
                      {showMonthLabel && (
                        <span className="absolute top-0 left-0 whitespace-nowrap">
                          {monthLabel}
                        </span>
                      )}
                  </div>

                  {/* Day Cells */}
                  {week.map((day, dayIndex) => (
                    day.isPlaceholder ? (
                        <div key={`placeholder-${dayIndex}`} className="w-[10px] h-[10px]" />
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
      <div className={`flex justify-end items-center gap-2 text-xs ${THEME.text} mt-4`}>
         <span>Less</span>
         <div className="flex gap-[3px]">
            {[0, 1, 2, 3, 4].map(level => (
               <div 
                 key={level} 
                 className={`w-[10px] h-[10px] rounded-[2px] ${THEME.levels[level]}`} 
               />
            ))}
         </div>
         <span>More</span>
      </div>

    </div>
  );
}

function HeatmapCell({ day }: { day: DayData }) {
  // Use a transparent border normally, and a lighter ring on hover
  return (
    <div className="relative group">
      <div 
        className={`w-[10px] h-[10px] rounded-[2px] ${THEME.levels[day.level]} border border-transparent hover:border-gray-400`}
      />

      {/* Replicating the specific tooltip style from image_08da31.png */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center z-50 pointer-events-none">
        <div className={`${THEME.tooltipBg} p-2 rounded text-xs shadow-xl border border-gray-600 whitespace-nowrap z-50`}>
           <div className="text-gray-300 font-bold mb-1 text-center">
              {day.count} submissions
           </div>
           <div className="text-gray-400 text-[10px] text-center">
              {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
           </div>
        </div>
        {/* Triangle Arrow */}
        <div className={`w-2 h-2 ${THEME.tooltipBg} border-r border-b border-gray-600 rotate-45 -mt-1`}></div>
      </div>
    </div>
  );
}