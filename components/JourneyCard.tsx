import Link from 'next/link';

export default function JourneyCard() {

  return (
    <Link
      href={'/journey'}
      className="cursor-target block w-[95%] mx-auto h-full rounded-2xl p-px bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 relative cursor-pointer"
    >
      <div className="relative w-full h-full overflow-hidden bg-[#0a0a0a] rounded-2xl group">

        <div className="absolute inset-0 pointer-events-none">
          {/* First Card */}
          <div className="absolute top-8 left-8 w-44 h-52 bg-neutral-900/80 border border-white/10 rounded-2xl p-2 shadow-xl 
                        -rotate-15 scale-95 transition-transform duration-500 group-hover:scale-100 group-hover:-rotate-18">
            <div className="relative h-full w-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-4 flex flex-col gap-3">
              <div className="h-2.5 w-2/3 bg-white/40 rounded-full mb-1"></div>
              <div className="h-2.5 w-full bg-white/30 rounded-full"></div>
              <div className="h-2.5 w-4/5 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 h-5 w-5 bg-neutral-900/40 rounded-full"></div>
            </div>
          </div>

          {/* Second Card */}
          <div className="absolute top-24 right-4 w-48 h-56 bg-neutral-900/80 border border-white/10 rounded-2xl p-2 shadow-2xl 
                        rotate-12 translate-x-8 transition-transform duration-500 group-hover:translate-x-6 group-hover:rotate-15">
            <div className="relative h-full w-full bg-linear-to-tl from-pink-500 via-fuchsia-500 to-purple-600 rounded-xl p-4 flex flex-col gap-3">
              <div className="h-2.5 w-3/4 bg-white/40 rounded-full mb-1"></div>
              <div className="h-2.5 w-full bg-white/30 rounded-full"></div>
              <div className="h-2.5 w-5/6 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 h-5 w-5 bg-neutral-900/40 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-[70%] flex flex-col justify-end p-8 mt-32 pointer-events-none">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase pl-0.5">
              Guestbook
            </span>
            <h2 className="text-2xl font-medium text-neutral-100">
              Check out the journey to this website
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
}