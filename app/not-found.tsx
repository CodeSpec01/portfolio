import { notFoundMetadata } from '@/constants/constants'
import { Metadata } from 'next'

export const metadata : Metadata = notFoundMetadata;

const page = () => {
  return (
    <div className='bg-red-500 text-white text-center text-9xl h-screen'>this page is not found</div>
  )
}

export default page