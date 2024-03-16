'use client'

import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import Brain from '@/src/components/Brain'
import Link from 'next/link'

export default function AboutPage() {

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef })

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: '2000px'})

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef)

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

      {/* Container */}
      <div className='h-full overflow-scroll lg:flex scroll-smooth' ref={containerRef}>

        {/* Text Container */}
        <div className='p-4 flex flex-col gap-24 sm:p-8 md:p-12 md:gap-32 lg:gap-48 lg:pr-0 lg:p-24 lg:w-2/3 xl:p-48 xl:pr-0 xl:gap-64 xl:w-1/2'>

          {/* Biography Container */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>

            {/* Biography Title */}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>

            {/* Biography Description */}
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat architecto, dolorum ratione enim nulla explicabo veritatis magni, hic, voluptatibus dolor nostrum quis magnam nisi. Autem voluptatum harum quidem perspiciatis cumque, facere hic?</p>

            {/* Biography Quote */}
            <span className='italic'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequuntur assumenda voluptatibus!</span>

            {/* Biography Sign */}
            <div className='self-end'>
              <Image src={'/images/signature.svg'} height={100} width={100} />
            </div>

            {/* Biography Scroll */}
            <Link href={'#skill'}>

              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </Link>

          </div>

          {/* Skills Container */}
          <div className='flex flex-col gap-12 justify-center' ref={skillRef}>

            {/* Skill Title */}
            <motion.h1 className='text-2xl font-bold' initial={{ x: '-1000px' }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} id='skill'>SKILLS</motion.h1>

            {/* Skill List */}
            <motion.div className='flex gap-4 flex-wrap' initial={{ x: '1500px', display: 'none' }} animate={isSkillRefInView ? { x: 0, display: 'flex' } : {}} transition={{ delay: 0.6 }} >

              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Node.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Express.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Framer Motion</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">C++</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">Python</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">HTML5</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">CSS3</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:text-black hover:bg-white">TailwindCSS</div>
            </motion.div>

            {/* Skill Scroll SVG */}
            <Link href={'#experience'}>

              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: '10px' }}
                transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
              </motion.svg>

            </Link>
          </div>

          {/* Experience Container */}
          <div className='flex flex-col gap-12 justify-center' ref={experienceRef}>

            {/* Experience Title */}
            <motion.h1 className='font-bold text-2xl' initial={{ x: '-1000px' }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} id='experience'>EXPERIENCE</motion.h1>

            {/* Experience List */}
            <div className='h-fit w-fit'>

              {/* Experience List Item 1 */}
              <motion.div className='flex gap-3' initial={{ y: '300%' }} animate={isExperienceRefInView ? { y: 0 } : {}} transition={{ delay: 0.6 }} >

                {/* Left */}
                <div className='w-3/5'>

                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Member Technical Department</div>

                  {/* Job Description */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio eveniet voluptatem incidunt perferendis vel. Quasi amet deleniti dolores?</div>

                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>

                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Nakshatra</div>

                </div>

                {/* Center */}
                <div className="w-1/8">

                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">

                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                    </div>

                  </div>

                </div>

                {/* Right */}
                <div className="w-3/5"></div>
              </motion.div>

              {/* Experience List Item 2 */}
              <motion.div className='flex gap-3' initial={{ y: '300%' }} animate={isExperienceRefInView ? { y: 0 } : {}} transition={{ delay: 0.6 }} >

                {/* Left */}
                <div className='w-3/5'></div>

                {/* Center */}
                <div className="w-1/8">

                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">

                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                    </div>

                  </div>

                </div>

                {/* Right */}
                <div className="w-3/5">

                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Member</div>

                  {/* Job Description */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio eveniet voluptatem incidunt perferendis vel. Quasi amet deleniti dolores?</div>

                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>

                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Devcomm</div>
                </div>

              </motion.div>

              {/* Experience List Item 3*/}
              <motion.div className='flex gap-3' initial={{ y: '300%' }} animate={isExperienceRefInView ? { y: 0 } : {}} transition={{ delay: 0.6 }} >

                {/* Left */}
                <div className='w-3/5'>

                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Member Technical Department</div>

                  {/* Job Description */}
                  <div className="p-3 text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio eveniet voluptatem incidunt perferendis vel. Quasi amet deleniti dolores?</div>

                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2023-Present</div>

                  {/* Job Company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Space Con | Nakshatra</div>

                </div>

                {/* Center */}
                <div className="w-1/8">

                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">

                    {/* Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                    </div>

                  </div>

                </div>

                {/* Right */}
                <div className="w-3/5"></div>
              </motion.div>

            </div>

            {/* Resume Download */}
            <div className='flex pb-16 justify-center items-center'>
              <Link href='/resume.pdf'><h1 className='text-2xl font-semibold bg-gradient-to-br from-white to-transparent px-6 py-3 rounded-lg shadow-gray-950/30 shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:scale-110'>Resume</h1></Link>
            </div>
          </div>


        </div>

        {/* SVG Container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">

          <Brain scrollYProgress={scrollYProgress} />
        </div>

      </div>

    </motion.div>
  )
}
