'use client';

import React from 'react'
import SidebarItem from './SidebarItem'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Sidebar = () => {

  const segment = usePathname();

  const pages = [
    {
      title: 'Metrics List',
      path: '/',
      imgsrc: '/images/stats.png',
      alt: 'A bar graph icon'
    },
    {
      title: 'Recalculation',
      path: '/Recalculation',
      imgsrc: '/images/recalculate.png',
      alt: 'A circular arrow icon'
    },
    {
      title: 'YAML Status',
      path: '/YamlStatus',
      imgsrc: '/images/file-export.png',
      alt: 'Document icon with a sideways arrow'
    },
    {
      title: 'Configure YAML File',
      path: '/ConfigureFile',
      imgsrc: '/images/edit-yaml.png',
      alt: 'Icon for document editing with a pen'
    },
    {
      title: 'Settings',
      path: '/Settings',
      imgsrc: '/images/settings.png',
      alt: 'A settings icon featuring a gear symbol',
      lastItem: true
    }
  ];

  return (
    <div className='h-screen w-72 bg-sidebar pt-4
                    flex flex-col items-center'>
        <div className='mb-8 text-center'>
          <Image src='https://cdn.worldvectorlogo.com/logos/autozone-logo.svg' height={80} width={240} alt='Autozone logo'
                 className='mb-3' />
          <h5 className='font-bold text-sidebar-text' >Metric Threshold Calculator</h5>
        </div>
        
        <div className='w-full flex flex-col'>
        {pages.map((page, index) => (
        <SidebarItem
          key={index}
          title={page.title}
          destination={page.path}
          current={page.path === segment}
          imgsrc={page.imgsrc}
          alt={page.alt}
          lastItem={page.lastItem}
        />
        ))}
        </div>

        <div className='mt-auto mb-4 text-sidebar-text'>©All rights reserved</div>
    </div>
  )
}

export default Sidebar