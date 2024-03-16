'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

      <div className="h-full flex flex-col gap-0 px-4 py-10 box-border sm:px-8 md:px-12 md:py-0 lg:px-24 lg:flex-row lg:w-full">

        {/* Image Container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2 z-20">
          <Image src='/images/userImage.png' alt='User Image' fill className="object-contain" />
        </div>

        {/* Text Container */}
        <div className="h-1/2 flex flex-col gap-8 justify-between items-center lg:justify-center lg:gap-12 lg:w-1/2 lg:h-full">

          {/* Title */}
          <h1 className="text-4xl text-center font-bold md:text-6xl">Crafting Digital Experiences, Designing Tomorrow</h1>

          {/* Description */}
          <p className="text-center md:text-xl lg:w-full">Welcome to my digital canvas</p>

          {/* Buttons */}
          <div className="flex gap-4 justify-around lg:justify-center lg:gap-12 lg:w-full">
           
            <Link href='/portfolio' className="ring-1 ring-black bg-black text-white bg-gradient-to-br from-white-opacity-10 via-transparent px-6 py-3 rounded-lg shadow-gray-950/30 shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:scale-110">View my work</Link>
            
            <Link href='/contact' className="ring-1 ring-black bg-gradient-to-br from-white-opacity-10 via-transparent px-6 py-3 rounded-lg shadow-gray-950/30 shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:scale-110">Contact me</Link>
          </div>
        </div>
      </div>

      <div className="h-2 lg:hidden pt-8"></div>
    </motion.div>
  )
}

export default page
