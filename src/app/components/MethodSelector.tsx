import React from 'react'

const MethodSelector = async () => {
  const response: any = await fetch('https://run.mocky.io/v3/db498f3e-a3be-4bf0-8149-cbe8f3bbd93c',
  {cache: 'no-store'}
  ); 
  const data = await response.json();

  console.log(data)

  return (
    <div className='flex'>
        <select name='Service Methods' defaultValue='default' className='grow p-2 max-w-sm text-ellipsis' >
          <option value='default'>Select a service method</option>

          {data.map((service: any, index: number) => (
            <option key={index} value={service.serviceId}>
              {service.serviceName}
            </option>            
          ))}

        </select>
    </div>
  )
}

export default MethodSelector