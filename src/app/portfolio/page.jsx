'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://i.pinimg.com/originals/e3/3f/13/e33f133caed912840026e6dda22eb8f7.jpg',
    link: '',
    github: '',
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://i.pinimg.com/originals/e3/3f/13/e33f133caed912840026e6dda22eb8f7.jpg',
    link: '',
    github: '',
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://i.pinimg.com/originals/e3/3f/13/e33f133caed912840026e6dda22eb8f7.jpg',
    link: '',
    github: '',
  },
]

export default function PortfolioPage() {
  
  const ref = useRef();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.75], ["0%", "-65%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="">


        <div className='h-[600vh] relative' ref={ref}>

          <div className="w-full h-[calc(100vh-6rem)] flex justify-center items-center text-8xl text-center " >
            MY WORK
          </div>

          <div className='absolute translate-x-[47vw] translate-y-[-30vh] '>

            <Link href={'#projectList'} className=''>

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

          <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
            <motion.div style={{ x }} className="flex" id='projectList'>

              {items.map(item => (

                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>

                  <div className="flex flex-col gap-8 text-white justify-center items-center bg-gradient-to-br from-white-opacity-10 via-transparent px-2 lg:px-6 py-3 rounded-lg shadow-gray-950/30 shadow-lg backdrop-blur-[10px]">

                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>

                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.image} alt={item.title} fill />
                    </div>

                    <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>

                    <div className='flex justify-between'>
                      <Link href={item.github} className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-br from-white via-transparent shadow-gray-950/30 shadow-md backdrop-blur-[10px] text-gray-600 font-semibold m-4 rounded transition-all duration-300 hover:scale-110' >
                        GitHub Link
                      </Link>
                      <Link href={item.link} className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-br from-white via-transparent shadow-gray-950/30 shadow-md backdrop-blur-[10px] text-gray-600 font-semibold m-4 rounded transition-all duration-300 hover:scale-110' >
                        Project Link
                      </Link>
                    </div>

                  </div>

                </div>
              ))}
            </ motion.div>

          </div>

        </div>

        <div className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center p-2 pr-4">

          <h1 className='text-5xl md:text-6xl lg:text-8xl'>Do You Have a Project ?</h1>

          <div className="relative">

            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 5, ease: 'linear', repeat: Infinity }} viewBox='0 0 300 300' className='w-96 h-96 md:w-[500px] md:h-[500px]'>
              <defs>
                <path id='circlePath' d='M 150, 150 m -60, 0 a 60, 60 0 0,1 120, 0 a 60, 60 0 0, 1 -120, 0' />
              </defs>

              <text fill='#000'>
                <textPath xlinkHref='#circlePath' className='text-xl'>Full Stack Developer</textPath>
              </text>
            </motion.svg>

            <Link href={'/contact'} className='w-32 h-32 text-xl md:text-3xl absolute top-0 bottom-0 left-0 right-0 m-auto bg-black text-white rounded-full flex items-center justify-center md:w-40 md:h-40'>Hire Me</Link>

          </div>

        </div>

      </div>
    </motion.div>
  )
}
