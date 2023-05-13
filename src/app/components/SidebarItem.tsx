import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface props {
    title: string
    destination: string
    imgsrc: string
    alt: string
    lastItem?: boolean
    current?: boolean
}

const SidebarItem = ({ title, destination, current, imgsrc, alt, lastItem }: props) => {
  const border = lastItem ? 'border-t border-b' : 'border-t';
  const bgColor = current ? 'bg-selectedItem' : '';

  return (
    <div className={ border }>
      <Link href={ destination }>
          <button className={`${bgColor} text-sidebar-text py-4 px-8 text-center font-bold text-sm hover:bg-orange-500 hover:text-white active:bg-opacity-50 flex gap-3 w-full`}>
              <Image src={ imgsrc } width={ 25 } height={ 25 } alt={ alt } />
              { title }
          </button>
      </Link>
    </div>
  )
}

export default SidebarItem