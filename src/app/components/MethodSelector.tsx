import React from 'react'

const MethodSelector = () => {
  return (
    <div>
        <select name='Service Methods' defaultValue='default' className='p-2 w-96' >
          {/* Agregar despues un map para los valores */}
          <option value='default'>Select a service method</option>
        </select>
    </div>
  )
}

export default MethodSelector