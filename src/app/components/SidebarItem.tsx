import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  destination: string;
  icon: React.ReactNode;
  lastItem?: boolean;
  current?: boolean;
}

const SidebarItem = ({ title, destination, current, icon, lastItem}: Props) => {
  const border = lastItem ? 'border-t border-b' : 'border-t';
  const bgColor = current ? 'bg-selectedItem' : '';

  return (
    <Link href={destination} className={`${border} ${bgColor} hover:bg-orange-500 hover:text-white active:bg-opacity-50 group`}>
      <div className='text-sidebar-text py-4 px-8 text-center font-bold text-md flex items-center gap-3 min-w-max'>
        {icon}
        {title}
      </div>
    </Link>
  );
};

export default SidebarItem;
