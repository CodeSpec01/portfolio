import Others from '@/components/Others';
import { othersMetadata } from '@/constants/constants'
import { Metadata } from 'next';

export const metadata : Metadata = othersMetadata;

const page = () => {
  return (
    <div><Others/></div>
  )
}

export default page