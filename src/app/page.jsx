'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

      <div className="h-full overflow-scroll flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 lg:flex-row">

        {/* Image Container */}
        <div className="h-1/2 relative lg:h-full lg:w-1/2 z-20">
          <Image src='/images/userImage.png' alt='User Image' fill className="object-contain" />
        </div>

        {/* Text Container */}
        <div className="h-1/2 flex flex-col gap-8 justify-center items-center lg:w-1/2 lg:h-full">

          {/* Title */}
          <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experiences, Designing Tomorrow</h1>

          {/* Description */}
          <p className="md:text-xl lg:w-full">Welcome to my digital canvas</p>

          {/* Buttons */}
          <div className="flex gap-4 lg:w-full">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default page
