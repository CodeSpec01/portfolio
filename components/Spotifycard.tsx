import React from 'react';
import { FaSpotify } from "react-icons/fa";

const SpotifyCard = () => {
  // Placeholder data to match your image
  const songData = {
    title: "A Thousand Years",
    artist: "Christina Perry",
    album: "A Thousand Years",
    albumCoverUrl: "/globals/image.png"
  };

  return (
    <div className="rounded-3xl h-full p-px bg-linear-to-r from-[#1db954] via-[#20c964] to-[#00c853] shadow-2xl">
      {/* inner card */}
      <div className='group bg-linear-to-b from-black/90 to-[#8400FF] backdrop-blur-3xl rounded-3xl h-full w-full p-6 flex flex-col relative overflow-hidden font-sans shadow-xl transition-all duration-300 hover:shadow-2xl'>
      
      {/* Header and Song Info - Always in front */}
      <div className="flex flex-col space-y-4 z-30 relative">
        <div className="flex items-center space-x-2">
          <FaSpotify className="text-[#1db954] text-2xl" />
          <h2 className="text-white text-base font-bold tracking-wide">Last Played</h2>
        </div>

        <div className="flex flex-col space-y-1">
          <p className="text-white text-xl font-semibold leading-snug">
            <span className="text-white/70 font-normal">Last Played </span>
            {songData.title}
          </p>
          <p className="text-white/70 text-base">
            <span className="font-normal">by </span>
            <span className="text-white font-semibold">{songData.artist}</span>
          </p>
          <p className="text-white/70 text-base">
            <span className="font-normal">from </span>
            <span className="text-white font-semibold">{songData.album}</span>
          </p>
        </div>
      </div>

      {/* Media Container for Animation */}
      <div className="relative w-full grow flex items-end justify-center mt-4">
        
        {/* --- The Vinyl Disc --- */}
        {/* Positioned absolutely, behind the album art (z-0). Hovering the group translates it up and rotates it. */}
        <div 
          className="absolute scale-[200%] z-0 w-44 h-44 rounded-full bg-zinc-900/95 border-[3px] border-zinc-800 flex items-center justify-center shadow-xl
                     left-1/2 bottom-8 -translate-x-1/2
                     transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                     group-hover:-translate-y-20 group-hover:rotate-360"
        >
          {/* Center label of the vinyl */}
          <div className="w-14 h-14 rounded-full bg-zinc-950 border-2 border-zinc-800 relative z-10"></div>
          
          {/* Vinyl Grooves details */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[90%] h-[90%] rounded-full border-[0.5px] border-white/5"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[75%] h-[75%] rounded-full border-[0.5px] border-white/5"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[60%] h-[60%] rounded-full border-[0.5px] border-white/10"></div>
          </div>
           {/* Subtle vinyl shine reflection */}
           <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b  rounded-t-full rotate-45 transform origin-center pointer-events-none"></div>
        </div>

        {/* --- The Album Cover --- */}
        {/* Higher z-index (z-20) ensures it stays in front of the disc */}
        <div className="scale-[190%] relative z-20 w-52 h-36 rounded-xl overflow-hidden shadow-[0_8px_24px_rgb(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[200%]">
          <img
            src={songData.albumCoverUrl}
            alt={`${songData.album} album art`}
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay on album art */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SpotifyCard;