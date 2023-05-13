import Header from '@/app/components/Header'
import MethodSelector from '@/app/components/MethodSelector'
import RecalculationTable from '@/app/components/RecalculationTable'
import Image from 'next/image'
import React from 'react'

const ComparisonPage = () => {
  const tableHeight = 'h-[60rem]'

  return (
    <div>
      <Header title='Comparison' />
      <div className="pt-4 flex flex-col">
        <div className="flex gap-8">
          <MethodSelector />
          <button className='bg-orange-400 bg-opacity-75 hover:bg-opacity-100 active:bg-opacity-50 h-10 w-48'>Replace Threshold</button>
        </div>
      
        <div className="w-8/12 mt-6 self-center flex flex-col items-center">
          <div className="flex items-center gap-4">
            <button className='w-8 h-8 flex justify-center py-1 bg-gray-500 bg-opacity-75 border-2 border-gray-500 hover:bg-opacity-80 active:bg-opacity-50'>
              <Image src={'/images/left-arrow.png'} alt='Arrow pointing left' width={15} height={10} />
            </button>
            <h1 className='text-3xl'>Response Time</h1>
            <button className='w-8 h-8 flex justify-center py-1 bg-gray-500 bg-opacity-75 border-2 border-gray-500 hover:bg-opacity-80 active:bg-opacity-50'>
              <Image src={'/images/right-arrow.png'} alt='Arrow pointing right' width={15} height={10} />
            </button>
          </div>
          {/* Chart */}
          <div className='h-48'></div>
        
          <div className="w-full flex gap-8">
            <RecalculationTable title='Week X' height={tableHeight} />
            <RecalculationTable title='Official Threshold' height={tableHeight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisonPage