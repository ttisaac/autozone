import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
    title: string
    destination: string
    imgsrc: string
    alt: string
}

const SidebarItem = ({ title, destination, imgsrc, alt }: props) => {
  return (
    <Link href={ destination }>
        <button className='text-white py-4 px-8 text-center font-bold text-sm hover:bg-orange-500 flex gap-3 w-full'>
            <Image src={ imgsrc } width={ 25 } height={ 25 } alt={ alt } />
            { title }
        </button>
    </Link>
  )
}

export default SidebarItem