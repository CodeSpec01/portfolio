import NotFoundPage from '@/components/404';
import { notFoundMetadata } from '@/constants/constants'
import { Metadata } from 'next'

export const metadata : Metadata = notFoundMetadata;

const page = () => {
  return (
    <div><NotFoundPage/></div>
  )
}

export default page