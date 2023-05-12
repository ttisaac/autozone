import React from 'react'
import SidebarItem from './SidebarItem'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 h-screen w-64 bg-sidebar pt-4
                    flex flex-col items-center'>
        <div className='mb-8 text-center'>
          <Image src='https://cdn.worldvectorlogo.com/logos/autozone-logo.svg' height={80} width={240} alt='Autozone logo'
                 className='mb-3' />
          <h5 className='italic text-white' >Metric Threshold Calculator</h5>
        </div>
        
        <div className='w-full flex flex-col gap-5'>
            <SidebarItem title={'Metrics List'} destination='/' imgsrc='/images/stats.png' alt='Graph' />
            <SidebarItem title={'Recalculation'} destination='/' imgsrc='/images/recalculate.png' alt='Graph' />
            <SidebarItem title={'YAML Status'} destination='/' imgsrc='/images/file-export.png' alt='Graph' />
            <SidebarItem title={'Configure YAML File'} destination='/.' imgsrc='/images/edit-yaml.png' alt='Graph' />
            <SidebarItem title={'Settings'} destination='/' imgsrc='/images/settings.png' alt='Graph' />
        </div>
    </div>
  )
}

export default Sidebar