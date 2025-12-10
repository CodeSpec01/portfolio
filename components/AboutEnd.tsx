import React from 'react'
import CalendarHeatmap from './CalendarHeatmap'

function AboutEnd() {
  return (
    <div className='w-full   flex flex-col justify-center items-center py-[5vh] text-xl font-bold '>
      <h1>Explore & Experiment</h1>
      <div className='w-full p-[5vh] '>
        <h2>LeetCode HeatMap</h2>
        <CalendarHeatmap />
      </div>
      <div className='w-full py-[5vh] bg-green-300 flex justify-around'>
        <div className='bg-black rounded-2xl w-[25vw] h-[20vw]'></div>
        <div className='bg-black rounded-2xl w-[25vw] h-[20vw]'></div>
        <div className='bg-black rounded-2xl w-[25vw] h-[20vw]'></div>
      </div>
    </div>
  )
}

export default AboutEnd