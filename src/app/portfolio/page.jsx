'use client'

import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import '@/src/app/globals.css'

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: 'PromptNexus',
    desc: "A website to discover and share AI Prompts. Includes various features such as Google OAuth2 secure login, profile system, search by tags and users, access to edit prompts, delete account information at any time and more.",
    image: '/images/promptnexus.png',
    link: 'https://promptnexus-codespec.vercel.app/',
    github: 'https://github.com/CodeSpec01/promptnexus',
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: 'Portfolio Website',
    desc: "A website about myself. Giving a brief introduction about myself, listing all my skills, projects and experience accross various domains that I have gained over time.",
    image: '/images/portfolio.png',
    link: 'https://aviralgaur.vercel.app/',
    github: 'https://github.com/CodeSpec01/portfolio',
  },
]

export default function PortfolioPage() {

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='relative'>

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
        <div className="flex flex-col scroller" id='projectList'>

          {items.map(item => (

            <div className={`min-h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b ${item.color} box-border py-8 lg:py-12`} id={`Element${item.id}`} key={item.id}>

              <div className="w-[75%] sm:w-[60%] md:w-[50%] flex flex-col gap-8 text-white justify-center items-center bg-gradient-to-br from-white-opacity-10 via-transparent px-2 lg:px-6 py-3 rounded-lg shadow-gray-950/30 shadow-lg backdrop-blur-[10px]">

                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-center">{item.title}</h1>

                <div className="relative w-full h-52 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  <Image src={item.image} alt={item.title} fill/>
                </div>

                <p className='w-full md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-center'>{item.desc}</p>

                <div className='flex flex-col md:flex-row justify-between'>
                  <Link href={item.github} className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-br from-white via-transparent shadow-gray-950/30 shadow-md backdrop-blur-[10px] text-gray-600 font-semibold m-4 rounded transition-all duration-300 hover:scale-110' target='_blank'>
                    GitHub Link
                  </Link>
                  <Link href={item.link} className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-gradient-to-br from-white via-transparent shadow-gray-950/30 shadow-md backdrop-blur-[10px] text-gray-600 font-semibold m-4 rounded transition-all duration-300 hover:scale-110' target='_blank'>
                    Project Link
                  </Link>
                </div>

              </div>

              <Link href={item.id + 1 <= items.length ? `#Element${item.id + 1}` : '#contactMe'} className='pt-5 md:pt-0 md:pl-8 self-center'>

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
          ))}



        </div>

      </div>

      <div id="contactMe" className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center p-2 pr-4">

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

    </motion.div >
  )
}
