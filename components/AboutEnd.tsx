import React from 'react'
import CalendarHeatmap from './CalendarHeatmap'
import SpotifyCard from './Spotifycard'
import JourneyCard from './JourneyCard'
import LeetCodeCard from './LeetcodeCard'

function AboutEnd() {
  return (
    <div className='w-full  flex flex-col justify-center items-center py-[5vh] text-xl font-bold '>
      <h1>Explore & Experiment</h1>
      <div className='w-full pt-[5vh] '>
        <CalendarHeatmap />
      </div>
      <div className='w-full py-[5vh] gap-5 md:gap-0 flex md:flex-row flex-col justify-around'>
        <div className='rounded-2xl w-full mx-auto md:w-[32vw] h-[60vh]'>
          <JourneyCard/>
        </div>
        <div className='rounded-2xl w-full overflow-y-hidden mx-auto md:w-[32vw] h-[60vh]'>
          <LeetCodeCard/>
        </div>
        <div className='rounded-2xl w-full mx-auto md:w-[32vw] h-[60vh]'>
          <SpotifyCard/>
        </div>
      </div>
    </div>
  )
}

export default AboutEnd