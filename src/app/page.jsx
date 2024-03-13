import Image from "next/image"

const page = () => {
  return (
    <div className="h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-24">

      {/* Image Container */}
      <div className="h-1/2 relative">
        <Image src='/images/userImage.png' alt='User Image' fill className="object-contain" />
      </div>

      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-8 justify-center items-center">

        {/* Title */}
        <h1 className="text-4xl font-bold md:text-6xl">Crafting Digital Experiences, Designing Tomorrow</h1>

        {/* Description */}
        <p>Welcome to my digital canvas</p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>
        </div>
      </div>
    </div>
  )
}

export default page
