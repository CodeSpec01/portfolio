import React from 'react'
import CalendarHeatmap from './CalendarHeatmap'
import SpotifyCard from './Spotifycard'
import JourneyCard from './JourneyCard'
import LeetCodeCard from './LeetcodeCard'

function AboutEnd() {
  return (
    <div className='w-full   flex flex-col justify-center items-center py-[5vh] text-xl font-bold '>
      <h1>Explore & Experiment</h1>
      <div className='w-full p-[5vh] '>
        <CalendarHeatmap />
      </div>
      <div className='w-full py-[5vh] gap-5 md:gap-0 flex md:flex-row flex-col justify-around'>
        <div className='bg-black rounded-2xl w-[95%] mx-auto md:w-[30vw] h-[60vh]'>
          <JourneyCard/>
        </div>
        <div className='bg-black rounded-2xl w-[95%] overflow-y-hidden mx-auto md:w-[30vw] h-[60vh]'>
          <LeetCodeCard/>
        </div>
        <div className='bg-black rounded-2xl w-[95%] mx-auto md:w-[30vw] h-[60vh]'>
          <SpotifyCard/>
        </div>
      </div>
    </div>
  )
}

export default AboutEnd