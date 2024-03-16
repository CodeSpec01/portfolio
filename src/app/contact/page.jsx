'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactPage() {

  const text = "Say Hello"

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          form.current.reset();
        },
        (error) => {
          setError(true);
          setTimeout(() => {
            setError(false);
          }, 5000);
        },
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >

      <div className='min-h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>

        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div className='flex'>

            <motion.div>

              {text.split("").map((character, index) => (
                <motion.span key={index} initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }} >{character}</motion.span>
              ))}

            </motion.div>
            👋🏻
          </div>
        </div>

        {/* Form Container */}
        <form ref={form} onSubmit={sendEmail} className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'>
          <span> Dear Aviral,</span>
          <textarea rows="6" name='user_message' className='bg-transparent border-b-2 border-b-black outline-none resize-none' placeholder='Your message' required />

          <span>My mail address is: </span>
          <textarea name='user_email' className='bg-transparent border-b-2 border-b-black outline-none' placeholder='Your Email Address' required />

          <span>Regards</span>
          <textarea name="user_name" className='bg-transparent border-b-2 border-b-black outline-none' placeholder='Your name' required />
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4' >Send</button>

          {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully!</span>}
          {error && <span className='text-red-600 font-semibold'>Something went wrong!</span>}
        </form>
      </div>
    </motion.div>
  )
}
