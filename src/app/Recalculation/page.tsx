import React from 'react'
import Header from '../components/Header'
import MethodSelector from '../components/MethodSelector'
import RecalculationTable from '../components/RecalculationTable'

const RecalculationPage = () => {
  return (
    <div>
      <Header title='Recalculation' />

      <div className="pt-6">
        <div className="flex gap-16">
          <MethodSelector />

          <select name='Service Methods' defaultValue='default' className='p-2 w-96' >
            {/* Agregar despues un map para los valores */}
            <option value='default'>Week</option>
          </select>

          <select name='Service Methods' defaultValue='default' className='p-2 w-96' >
            {/* Agregar despues un map para los valores */}
            <option value='default'>Deviation Criteria</option>
          </select>

          <button className='bg-orange-400 bg-opacity-75 hover:bg-opacity-100 active:bg-opacity-50 h-10 w-32'>Recalculate</button>
          <button className='bg-orange-400 bg-opacity-75 hover:bg-opacity-100 active:bg-opacity-50 h-10 w-32'>Compare</button>
        </div>

        <div className='mt-8 flex gap-24'>
         <RecalculationTable title='Response Time' /> 
         <RecalculationTable title='Throughput Rate' /> 
         <RecalculationTable title='Failure Rate' /> 
        </div>

      </div>
    </div>
  )
}

export default RecalculationPage