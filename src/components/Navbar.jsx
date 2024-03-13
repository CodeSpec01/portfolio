'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navlink from './Navlink'

const websiteLinksList = [
  { url: '/', title: "Home" },
  { url: '/about', title: "About" },
  { url: '/portfolio', title: "Portfolio" },
  { url: '/contact', title: "Contact" },
]

const personalLinksList = [
  { url: 'https://github.com/CodeSpec01', image: 'images/github.svg', title: 'Github'},
  { url: 'https://www.linkedin.com/in/aviral-gaur-423b9b1b7/', image: 'images/linkedin.svg', title: 'LinkedIn'},
  { url: 'https://twitter.com/AviralGaur1037', image: 'images/x.svg', title: 'X'},
  { url: 'https://www.instagram.com/aviral._.gaur/', image: 'images/instagram.svg', title: 'Instagram'},
]

const Navbar = () => {

  const [open, setopen] = useState(false);

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24'>

      {/* Website Links list */}
      <div className='hidden gap-4 md:flex w-1/3'>
        {websiteLinksList.map(link => (

          <Navlink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <Link href='/' className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center md:hidden lg:flex">
        <span className='text-white mr-1'>Aviral</span>
        <span className='w-10 h-8 bg-white text-black flex items-center justify-center rounded'>Gaur</span>
      </Link>

      {/* Personal Links list */}
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        {personalLinksList.map(link => (
          <Link href={link.url} key={link.title} target='_blank'>
            <Image src={link.image} alt={link.title} width={24} height={24} />
          </Link>
        ))}
      </div>

      {/* Responsive Menu */}
      <div className='md:hidden'>
        {/* Menu Button */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => { setopen((prev) => !prev) }}>
          <div className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded-full`}></div>
          <div className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded-full`}></div>
          <div className={`w-10 h-1 ${open ? 'bg-white' : 'bg-black'} rounded-full`}></div>
        </button>

        {/* Menu List */}
        {open &&
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl'>
            {websiteLinksList.map(link => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar