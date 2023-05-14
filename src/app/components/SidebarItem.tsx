import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  destination: string;
  icon: React.ReactNode;
  lastItem?: boolean;
  current?: boolean;
  open?: boolean;
}

const SidebarItem = ({ title, destination, current, icon, lastItem, open }: Props) => {
  const border = lastItem ? 'border-t border-b' : 'border-t';
  const bgColor = current ? 'bg-selectedItem' : '';

  return (
    <div
      className={`${border} ${bgColor} hover:bg-orange-500 hover:text-white active:bg-opacity-50 group`}
    >
      <Link href={destination}>
        <div
          className={`text-sidebar-text py-4 ${
            open ? 'px-8' : 'px-3'
          } text-center font-bold text-md flex items-center gap-3`}
        >
          {icon}
          <span
            className={`absolute w-auto p-2 m-2 min-w-max left-16 shadow-md rounded-md text-white bg-gray-900 transition-all duration-100 scale-0 
            ${!open ? 'group-hover:scale-100' : ''} origin-left`}
          >
            {title}
          </span>
          <h2 className={`whitespace-pre ${!open && 'overflow-hidden'}`}>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default SidebarItem;
