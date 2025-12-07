import { projectsMetadata } from '@/constants/constants'
import { Metadata } from 'next'

export const metadata : Metadata = projectsMetadata;

const page = () => {
  return (
    <div>page</div>
  )
}

export default page