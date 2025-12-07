import { aboutMetadata } from '@/constants/constants';
import { Metadata } from 'next';


export const metadata: Metadata = aboutMetadata;


const page = () => {
  return (
    <div className='text-center'>page</div>
  )
}

export default page