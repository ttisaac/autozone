import React from 'react'

const MethodSelector = () => {
  return (
    <div className='overflow-hidden'>
        <select name='Service Methods' defaultValue='default' className='p-2 max-w-none' >
          {/* Agregar despues un map para los valores */}
          <option value='default'>Select a service method aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</option>
        </select>
    </div>
  )
}

export default MethodSelector