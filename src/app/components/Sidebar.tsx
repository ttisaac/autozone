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
      if (window.innerWidth <= 1500) { 
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
      open={open}
    />
  ));

  return (
    <div className={`flex-shrink-0 ${window.innerWidth <= 1500 ? 'w-16': ''}`}>
      <div className={`h-screen ${open ? 'w-80' : 'w-16'} duration-100 bg-sidebar pt-4 flex flex-col ${window.innerWidth <=1500 ? 'absolute' : 'relative'} items-center`}>
        <div className='w-full px-4 mb-8 flex justify-center'>
          <div className={`text-left ${open ? '' : 'hidden'} mr-4`}>
            <Image src='https://cdn.worldvectorlogo.com/logos/autozone-logo.svg' height={80} width={220} alt='Autozone logo' className='mb-3' />
            <h5 className='font-bold text-sidebar-text min-w-max'>Metric Threshold Calculator</h5>
          </div>
          <button
            className='w-12 h-12 flex justify-center items-center rounded-sm hover:bg-orange-500 text-white'
            onClick={() => setOpen(!open)}
          >
            <Bars3Icon className='w-10 h-10' />
          </button>
        </div>
        <div className='w-full flex flex-col relative'>{sidebarItems}</div>
        <div className={`mt-auto mb-4 text-sidebar-text ${open ? '' : 'hidden'}`}>© All rights reserved</div>
      </div>
    </div>
  );
};

export default Sidebar;

