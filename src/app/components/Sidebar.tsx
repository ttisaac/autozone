import React from 'react'
import SidebarItem from './SidebarItem'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className='h-screen w-72 bg-sidebar pt-4
                    flex flex-col items-center'>
        <div className='mb-8 text-center'>
          <Image src='https://cdn.worldvectorlogo.com/logos/autozone-logo.svg' height={80} width={240} alt='Autozone logo'
                 className='mb-3' />
          <h5 className='font-bold text-sidebar-text' >Metric Threshold Calculator</h5>
        </div>
        
        <div className='w-full flex flex-col'>
            <SidebarItem title={'Metrics List'} destination='/' imgsrc='/images/stats.png' alt='Graph' />
            <SidebarItem title={'Recalculation'} destination='/Recalculation' imgsrc='/images/recalculate.png' alt='Graph' />
            <SidebarItem title={'YAML Status'} destination='/YamlStatus' imgsrc='/images/file-export.png' alt='Graph' />
            <SidebarItem title={'Configure YAML File'} destination='/ConfigureFile' imgsrc='/images/edit-yaml.png' alt='Graph' />
            <SidebarItem title={'Settings'} destination='/Settings' imgsrc='/images/settings.png' alt='Graph' lastItem />
        </div>

        <div className='mt-auto mb-4 text-sidebar-text'>©All rights reserved</div>
    </div>
  )
}

export default Sidebar