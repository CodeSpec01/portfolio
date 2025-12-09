'use client';

import React, { useMemo } from 'react';

const data = {
  "activeYears": [2025],
  "streak": 122,
  "totalActiveDays": 228,
  "submissionCalendar": "{\"1735776000\": 7, \"1735862400\": 4, \"1736121600\": 6, \"1736208000\": 9, \"1736294400\": 7, \"1736380800\": 5, \"1736467200\": 14, \"1736553600\": 17, \"1736640000\": 1, \"1736726400\": 1, \"1736812800\": 19, \"1736899200\": 26, \"1736985600\": 11, \"1737072000\": 8, \"1737158400\": 14, \"1737244800\": 11, \"1737331200\": 3, \"1737417600\": 16, \"1737504000\": 9, \"1737590400\": 8, \"1737676800\": 2, \"1737763200\": 1, \"1737849600\": 3, \"1737936000\": 2, \"1738022400\": 10, \"1738108800\": 4, \"1738195200\": 1, \"1738281600\": 8, \"1738368000\": 6, \"1738454400\": 7, \"1738540800\": 2, \"1738627200\": 7, \"1738713600\": 7, \"1738800000\": 7, \"1738886400\": 7, \"1738972800\": 1, \"1739059200\": 14, \"1739145600\": 4, \"1739232000\": 1, \"1739318400\": 5, \"1739404800\": 9, \"1739491200\": 1, \"1739577600\": 2, \"1739664000\": 1, \"1739750400\": 2, \"1739836800\": 1, \"1739923200\": 5, \"1740009600\": 2, \"1740096000\": 3, \"1740182400\": 1, \"1740268800\": 1, \"1740355200\": 2, \"1740441600\": 1, \"1740528000\": 1, \"1740700800\": 2, \"1740787200\": 3, \"1740873600\": 1, \"1740960000\": 1, \"1741046400\": 1, \"1741132800\": 1, \"1741219200\": 1, \"1741305600\": 3, \"1741392000\": 6, \"1741478400\": 5, \"1741564800\": 1, \"1741651200\": 1, \"1741737600\": 1, \"1741824000\": 2, \"1741910400\": 1, \"1741996800\": 2, \"1742083200\": 1, \"1742169600\": 1, \"1742256000\": 1, \"1742342400\": 2, \"1742428800\": 1, \"1742515200\": 1, \"1742601600\": 1, \"1749600000\": 5, \"1749686400\": 15, \"1749772800\": 8, \"1749859200\": 2, \"1749945600\": 2, \"1750032000\": 4, \"1750377600\": 3, \"1750809600\": 15, \"1750896000\": 3, \"1751587200\": 2, \"1751673600\": 5, \"1751760000\": 23, \"1751846400\": 13, \"1751932800\": 13, \"1752019200\": 7, \"1752105600\": 5, \"1752278400\": 3, \"1752364800\": 3, \"1752537600\": 2, \"1752624000\": 1, \"1752883200\": 14, \"1752969600\": 41, \"1753056000\": 16, \"1753142400\": 6, \"1753228800\": 4, \"1753401600\": 15, \"1753488000\": 5, \"1753574400\": 15, \"1753747200\": 4, \"1753833600\": 8, \"1753920000\": 2, \"1754006400\": 19, \"1754092800\": 8, \"1754179200\": 6, \"1754265600\": 3, \"1754352000\": 12, \"1754438400\": 6, \"1754524800\": 10, \"1754611200\": 4, \"1754697600\": 2, \"1754784000\": 1, \"1754870400\": 4, \"1754956800\": 6, \"1755043200\": 4, \"1755129600\": 9, \"1755216000\": 1, \"1755302400\": 10, \"1755388800\": 1, \"1755475200\": 1, \"1755561600\": 2, \"1755648000\": 8, \"1755734400\": 1, \"1755820800\": 3, \"1755907200\": 62, \"1755993600\": 1, \"1756080000\": 1, \"1756166400\": 11, \"1756252800\": 9, \"1756339200\": 27, \"1756425600\": 1, \"1756512000\": 10, \"1756598400\": 2, \"1756684800\": 3, \"1756771200\": 16, \"1756857600\": 12, \"1756944000\": 1, \"1757030400\": 1, \"1757116800\": 8, \"1757203200\": 1, \"1757289600\": 2, \"1757376000\": 5, \"1757462400\": 2, \"1757548800\": 16, \"1757635200\": 1, \"1757721600\": 8, \"1757808000\": 13, \"1757894400\": 1, \"1757980800\": 4, \"1758067200\": 16, \"1758153600\": 21, \"1758240000\": 1, \"1758326400\": 3, \"1758412800\": 11, \"1758499200\": 1, \"1758585600\": 1, \"1758672000\": 1, \"1758758400\": 1, \"1758844800\": 4, \"1758931200\": 8, \"1759017600\": 10, \"1759104000\": 4, \"1759190400\": 11, \"1759276800\": 6, \"1759363200\": 21, \"1759449600\": 11, \"1759536000\": 10, \"1759622400\": 14, \"1759708800\": 1, \"1759795200\": 8, \"1759881600\": 12, \"1759968000\": 1, \"1760054400\": 11, \"1760140800\": 2, \"1760227200\": 3, \"1760313600\": 2, \"1760400000\": 5, \"1760486400\": 2, \"1760572800\": 4, \"1760659200\": 1, \"1760745600\": 8, \"1760832000\": 17, \"1760918400\": 18, \"1761004800\": 6, \"1761091200\": 1, \"1761177600\": 2, \"1761264000\": 15, \"1761350400\": 9, \"1761436800\": 1, \"1761523200\": 5, \"1761609600\": 4, \"1761696000\": 3, \"1761782400\": 2, \"1761868800\": 1, \"1761955200\": 4, \"1762041600\": 39, \"1762128000\": 1, \"1762214400\": 18, \"1762300800\": 12, \"1762387200\": 2, \"1762473600\": 3, \"1762560000\": 17, \"1762646400\": 9, \"1762732800\": 3, \"1762819200\": 3, \"1762905600\": 21, \"1762992000\": 12, \"1763078400\": 4, \"1763164800\": 3, \"1763251200\": 13, \"1763337600\": 15, \"1763424000\": 3, \"1763510400\": 6, \"1763596800\": 3, \"1763683200\": 1, \"1763769600\": 7, \"1763856000\": 4, \"1763942400\": 1, \"1764028800\": 3, \"1764115200\": 3, \"1764201600\": 4, \"1764460800\": 3}"
}


// --- Types ---

interface RawApiData {
  activeYears: number[];
  streak: number;
  totalActiveDays: number;
  submissionCalendar: string;
}

interface DayData {
  date: string;       // "YYYY-MM-DD"
  count: number;      // 0 if no data
  level: number;      // 0-4 intensity
  isPlaceholder?: boolean; // For empty days before Jan 1st
}

// --- Helpers ---

const getIntensity = (count: number) => {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 10) return 3;
  return 4;
};

const getColorClass = (level: number) => {
  switch (level) {
    case 0: return 'bg-gray-100 dark:bg-gray-800 border border-transparent'; // Empty
    case 1: return 'bg-green-200 border-green-300';
    case 2: return 'bg-green-400 border-green-500';
    case 3: return 'bg-green-600 border-green-700';
    case 4: return 'bg-green-800 border-green-900';
    default: return 'bg-gray-100 dark:bg-gray-800';
  }
};

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function CalendarHeatmap() {

  // 1. Process Data
  const { weeks, year } = useMemo(() => {
    // Parse the input data
    const calendarMap: Record<string, number> = JSON.parse(data.submissionCalendar);
    const normalizedMap = new Map<string, number>();

    // We assume the data belongs to the latest active year
    const targetYear = data.activeYears[data.activeYears.length - 1];

    Object.entries(calendarMap).forEach(([ts, count]) => {
      const date = new Date(parseInt(ts) * 1000);
      const key = date.toISOString().split('T')[0];
      normalizedMap.set(key, count);
    });

    // 2. Generate Full Year Days
    const startDate = new Date(`${targetYear}-01-01`);
    const endDate = new Date(`${targetYear}-12-31`);
    
    const allDays: DayData[] = [];
    
    // Add padding days if Jan 1st isn't a Monday (assuming Mon start)
    // getDay(): 0=Sun, 1=Mon... 
    // We want 1=Mon... so we adjust.
    let startDayOfWeek = startDate.getDay(); 
    // Convert to Mon=0, Sun=6
    startDayOfWeek = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

    for (let i = 0; i < startDayOfWeek; i++) {
      allDays.push({ date: `prev-${i}`, count: 0, level: 0, isPlaceholder: true });
    }

    // Fill actual days
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const key = d.toISOString().split('T')[0];
      const count = normalizedMap.get(key) || 0;
      allDays.push({ date: key, count, level: getIntensity(count) });
    }

    // 3. Chunk into Weeks (Arrays of 7)
    const weeksArr: DayData[][] = [];
    for (let i = 0; i < allDays.length; i += 7) {
      weeksArr.push(allDays.slice(i, i + 7));
    }

    return { weeks: weeksArr, year: targetYear };
  }, [data]);

  return (
    <div className="w-full flex flex-col justify-center items-center p-6 rounded-xl backdrop-blur-sm shadow-sm">
      
      {/* Header Stats */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
            {data.totalActiveDays} submissions in {year}
          </h2>
          <div className="flex gap-4 text-xs text-gray-500 mt-1">
            <span>Current Streak: <strong className="text-gray-700 dark:text-gray-300">{data.streak}</strong></span>
            <span>Max Streak: <strong className="text-gray-700 dark:text-gray-300">{data.streak}</strong></span>
          </div>
        </div>
      </div>

      {/* HEATMAP CONTAINER */}
      <div className="w-full pb-4">
        <div className="flex justify-center gap-1 min-w-max">
            
            {/* Y-Axis Labels (Mon/Wed/Fri) */}
            <div className="flex flex-col gap-[3px] text-[10px] text-gray-400 mt-5 mr-2">
                <div className="h-3" /> {/* Mon (empty/skipped usually) */}
                <div className="h-3 flex items-center">Mon</div>
                <div className="h-3" />
                <div className="h-3 flex items-center">Wed</div>
                <div className="h-3" />
                <div className="h-3 flex items-center">Fri</div>
                <div className="h-3" />
            </div>

            {/* Weeks Rendered as Columns */}
            {weeks.map((week, weekIndex) => {
              // Determine if this week starts a new month to show label
              const firstDay = week.find(d => !d.isPlaceholder);
              const dateObj = firstDay ? new Date(firstDay.date) : null;
              const showMonthLabel = dateObj && dateObj.getDate() <= 7 && weekIndex !== 0; // Simple approximation
              const monthLabel = dateObj ? MONTH_LABELS[dateObj.getMonth()] : "";

              return (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                   {/* Month Label Row */}
                   <div className="h-[15px] text-[10px] text-gray-400 mb-1">
                      {(weekIndex === 0 || showMonthLabel) && <span>{monthLabel}</span>}
                   </div>

                   {/* Days in this Week */}
                   {week.map((day, dayIndex) => (
                     day.isPlaceholder ? (
                        <div key={dayIndex} className="w-3 h-3" />
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
      <div className="flex justify-end items-center gap-2 text-xs text-gray-400 mt-2">
         <span>Less</span>
         <div className="flex gap-1">
            {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className={`w-3 h-3 rounded-sm ${getColorClass(i)}`} />
            ))}
         </div>
         <span>More</span>
      </div>

    </div>
  );
}

// --- Sub-Component for Tooltip Logic ---

function HeatmapCell({ day }: { day: DayData }) {
  return (
    <div className="relative group">
      {/* The Square */}
      <div 
        className={`w-3 h-3 rounded-sm transition-all duration-200 ${getColorClass(day.level)}`}
      />

      {/* The Custom Tooltip */}
      {/* opacity-0 group-hover:opacity-100: Fades in on hover
          absolute bottom-full: Positions it above the square
          left-1/2 -translate-x-1/2: Centers it horizontally
          pointer-events-none: Prevents the tooltip from glitching mouse events
      */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap shadow-lg flex flex-col items-center">
            <span className="font-semibold text-gray-300">
                {day.count} submissions
            </span>
            <span className="text-gray-500 text-[10px]">
                {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            {/* Little triangle arrow at bottom of tooltip */}
            <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
}