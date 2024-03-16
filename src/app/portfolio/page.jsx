'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://in.pinterest.com/pin/15129348739852482/',
    link: '',
    github: '',
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://in.pinterest.com/pin/15129348739852482/',
    link: '',
    github: '',
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: 'Lorem ipsum',
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae incidunt beatae repudiandae quos ipsa. Ducimus corrupti minima quos praesentium libero ipsa dolorem maxime a, ipsum obcaecati ea dolores in architecto?",
    image: 'https://in.pinterest.com/pin/15129348739852482/',
    link: '',
    github: '',
  },
]

export default function PortfolioPage() {

  const targetRef = useRef(0);
  const { scrollYProgress } = useScroll({ target: targetRef, });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  console.log(x);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

      <div className='h-[600vh] relative' ref={targetRef}>

        <div className="w-full h-[calc(100vh-10rem)] flex justify-center items-center text-8xl text-center" >
          MY WORK
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className="flex">

            {items.map(item => (

              <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>

                <div className="flex flex-col gap-8 text-white">

                  <h1 className="">{item.title}</h1>

                  <div className="relative">
                    <Image src={item.image} alt={item.title} fill />
                  </div>

                  <p>{item.desc}</p>

                  <Link href={item.link} >See Demo</Link>

                </div>

              </div>
            ))}
          </ motion.div>

        </div>
      
      </div>

      <div className="w-full h-screen flex flex-col gap-16 items-center justify-center text-center">

        <h1 className='text-8xl'>Do You Have a Project ?</h1>

        <div className="relative">

          <motion.svg  animate={{rotate: 360}} transition={{duration: 5, ease: 'linear', repeat: Infinity}} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
            <defs>
              <path id='circlePath' d='M 150, 150 m -60, 0 a 60, 60 0 0,1 120, 0 a 60, 60 0 0, 1 -120, 0' />
            </defs>

            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>Full Stack Developer</textPath>
            </text>
          </motion.svg>

          <Link href={'/contact'} className='w-16 h-16 absolute top-0 bottom-0 left-0 right-0 m-auto bg-black text-white rounded-full flex items-center justify-center md:w-28 md:h-28'>Hire Me</Link>

        </div>

      </div>

    </motion.div>
  )
}
