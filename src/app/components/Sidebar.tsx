'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import {
  ListBulletIcon,
  CalculatorIcon,
  ClipboardDocumentIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

const Sidebar = () => {
  const segment = usePathname();

  const pages = [
    {
      title: 'Metrics List',
      path: '/',
      icon: <ListBulletIcon className='w-10 h-10 flex-shrink-0 text-white' />,
    },
    {
      title: 'Recalculation',
      path: '/Recalculation',
      icon: <CalculatorIcon className='w-10 h-10 flex-shrink-0 text-white' />,
    },
    {
      title: 'YAML Status',
      path: '/YamlStatus',
      icon: <ClipboardDocumentIcon className='w-10 h-10 flex-shrink-0 text-white' />,
    },
    {
      title: 'Configure YAML File',
      path: '/ConfigureFile',
      icon: <DocumentTextIcon className='w-10 h-10 flex-shrink-0 text-white' />,
    },
    {
      title: 'Settings',
      path: '/Settings',
      icon: <Cog6ToothIcon className='w-10 h-10 flex-shrink-0 text-white' />,
      lastItem: true,
    },
  ];

  const [open, setOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = pages.map((page, index) => (
    <SidebarItem
      key={index}
      title={page.title}
      destination={page.path}
      current={segment === page.path || segment.startsWith(`${page.path}/`)}
      icon={page.icon}
      lastItem={page.lastItem}
    />
  ));

  return (
    <div className='flex-shrink-0'>
          <button className='absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group'
          onClick={() => setOpen(!open)}
          >
            <Bars3Icon className='w-10 h-10 lg:hidden' />
          </button>

      <div className={`h-screen lg:w-72 absolute lg:relative ${open ? 'w-72' : 'w-0'} overflow-hidden bg-sidebar shadow-md shadow-black pt-4 flex flex-col items-center transition-all duration-150 ease-in-out`}>
        <div className='w-full px-4 mb-8'>
          <Image src='https://cdn.worldvectorlogo.com/logos/autozone-logo.svg' height={80} width={260} alt='Autozone logo' className='mb-3' />
          <h5 className='font-bold text-sidebar-text text-lg min-w-max'>Metric Threshold Calculator</h5>
        </div>

        <div className='w-full flex flex-col relative'>{sidebarItems}</div>
        <div className={`mt-auto mb-4 text-sidebar-text ${open ? '' : 'hidden'}`}>© All rights reserved</div>
      </div>
    </div>
  );
};

export default Sidebar;

