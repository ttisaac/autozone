import React from 'react'

const MethodSelector = () => {
  return (
    <div className='flex'>
        <select name='Service Methods' defaultValue='default' className='grow p-2 max-w-sm text-ellipsis' >
          <option value='default'>Select a service method</option>
          <option value='1'>SERVICE_METHOD-60BE1ACE9F360BE5</option>
        </select>
    </div>
  )
}

export default MethodSelector