import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
    title: string
    destination: string
    imgsrc: string
    alt: string
    lastItem?: boolean
}

const SidebarItem = ({ title, destination, imgsrc, alt, lastItem }: props) => {
  const border = lastItem ? 'border-t border-b' : 'border-t';

  return (
    <div className={ border }>
      <Link href={ destination }>
          <button className='text-sidebar-text py-4 px-8 text-center font-bold text-sm hover:bg-orange-500 hover:text-white flex gap-3 w-full'>
              <Image src={ imgsrc } width={ 25 } height={ 25 } alt={ alt } />
              { title }
          </button>
      </Link>
    </div>
  )
}

export default SidebarItem