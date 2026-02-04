'use client';

import { useMemo, useState, useEffect } from 'react';
import { FaSpotify } from "react-icons/fa";
import Loader from './Loader';

const CACHE_KEY = 'spotify_last_played_v1';
const CACHE_DURATION = 1000 * 60 * 2; // 2 Minutes (Music updates often)

// === Types ===
interface SongData {
  title: string;
  artist: string;
  album: string;
  albumCoverUrl: string;
  isPlaying: boolean;
  url: string;
}

// === Custom Hook ===
function useLastFM() {
  const [data, setData] = useState<SongData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchMusic = async () => {
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

      try {
        const response = await fetch("/api/get-spotify");

        if (!response.ok) throw new Error('Failed to fetch music');

        const result = await response.json();
        const track = result.recenttracks?.track?.[0];

        if (!track) throw new Error('No track data found');

        const formattedData: SongData = {
          title: track.name,
          artist: track.artist['#text'],
          album: track.album['#text'],
          albumCoverUrl: track.image[3]['#text'], // Index 3 is 'extralarge'
          // Last.fm returns "@attr": { "nowplaying": "true" } if playing
          isPlaying: track['@attr']?.nowplaying === 'true',
          url: track.url
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: formattedData,
          timestamp: Date.now()
        }));

        setData(formattedData);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, []);

  return { songData: data, loading, error };
}

export default function SpotifyCard() {
  const { songData, loading, error } = useLastFM();

  // === Memoized Display Data ===
  // Prevents flicker or recalculation during re-renders
  const display = useMemo(() => {
    if (!songData) return null;
    return {
      ...songData,
      // Fallback image if Last.fm doesn't provide one (common for local files)
      albumCoverUrl: songData.albumCoverUrl || '/globals/default-vinyl.png'
    };
  }, [songData]);

  return (
    <div className="w-[95%] mx-auto relative rounded-3xl h-full p-px bg-linear-to-r from-[#1db954] via-[#20c964] to-[#00c853] overflow-hidden">

      {/* === OVERLAYS === */}

      {/* Loading Skeleton */}
      {loading && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm rounded-3xl transition-all">
          <Loader />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="absolute inset-0 z-30 bg-zinc-900/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
          <FaSpotify className="text-gray-600 text-4xl mb-4" />
          <p className="text-gray-400 text-sm mb-4">Could not load music data.</p>
        </div>
      )}

      {/* === CONTENT (Rendered if data exists) === */}
      <div className='group bg-linear-to-b from-black/90 to-[#8400FF] backdrop-blur-3xl rounded-3xl h-full w-full p-6 flex flex-col relative overflow-hidden font-sans shadow-xl transition-all duration-300 hover:shadow-2xl'>

        {/* Header and Song Info */}
        <div className="flex flex-col space-y-4 z-30 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaSpotify className="text-[#1db954] text-2xl" />
              <h2 className="text-white text-base font-bold tracking-wide">
                {display?.isPlaying ? "Now Playing" : "Last Played"}
              </h2>
            </div>
            {/* Live Indicator Dot */}
            {display?.isPlaying && (
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <a
              href={display?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl font-semibold leading-snug hover:underline decoration-1 decoration-white/50 underline-offset-4 truncate"
            >
              {/* If loading, keep space reserved, else show title */}
              {display?.title || "Waiting for music..."}
            </a>
            <p className="text-white/70 text-base truncate">
              <span className="font-normal">by </span>
              <span className="text-white font-semibold">{display?.artist || "..."}</span>
            </p>
            <p className="text-white/70 text-base truncate">
              <span className="font-normal">from </span>
              <span className="text-white font-semibold">{display?.album || "..."}</span>
            </p>
          </div>
        </div>

        {/* Media Container for Animation */}
        <div className="relative w-full grow flex items-end justify-center mt-4 min-h-40">

          {/* --- The Vinyl Disc --- */}
          <div
            className={`absolute scale-[150%] z-0 w-44 h-44 rounded-full bg-zinc-900/95 border-[3px] border-zinc-800 flex items-center justify-center shadow-xl left-1/2 bottom-8 -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] inset-y-[40%] ${display ? "group-hover:-translate-y-45 group-hover:rotate-360" : ""}`}
          >
            <div className="w-14 h-14 rounded-full bg-zinc-950 border-2 border-zinc-800 relative z-10 overflow-hidden">
              {/* Tiny center image in vinyl */}
              {display?.albumCoverUrl && (
                <img src={display.albumCoverUrl} alt="" className="w-full h-full object-cover opacity-50" />
              )}
            </div>

            {/* Vinyl Grooves */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[90%] h-[90%] rounded-full border-[0.5px] border-white/5"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[75%] h-[75%] rounded-full border-[0.5px] border-white/5"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[60%] h-[60%] rounded-full border-[0.5px] border-white/10"></div>
            </div>
          </div>

          {/* --- The Album Cover --- */}
          <div className="scale-[150%] relative z-20 w-52 h-52 rounded-xl overflow-hidden shadow-[0_8px_24px_rgb(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[160%] bg-zinc-800">
            {display?.albumCoverUrl && (
              <img
                src={display.albumCoverUrl}
                alt={`${display.album} album art`}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}