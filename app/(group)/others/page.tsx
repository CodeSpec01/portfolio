import { othersMetadata } from '@/constants/constants'
import { Metadata } from 'next';

export const metadata : Metadata = othersMetadata;

const page = () => {
  return (
    <div>page</div>
  )
}

export default page