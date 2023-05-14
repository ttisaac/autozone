import React from 'react'

const ServiceIdTable = async () => {

    const response: any = await fetch('https://run.mocky.io/v3/db498f3e-a3be-4bf0-8149-cbe8f3bbd93c',
    {cache: 'no-store'}
    ); 
    const data = await response.json();
    
  return (
    <div className="h-[70rem] w-2/5 overflow-y-scroll flex-auto">
        <table className='w-full serviceid-table'>
            <thead className='bg-zinc-400 h-12 text-2xl border-b-4 border-white'>
            <tr className='text-left text-white'>
                <th className='px-4'>Service ID</th>
            </tr>
            </thead>

            <tbody>
            {data.map((service: any, index: number) => (
                <tr key={index} className='h-12 border-y-2 border-white'>
                    <td className="h-12 flex items-center gap-4 px-8 text-xl">
                        <input name='Service Selector' value={service.serviceId} type="checkbox" className='w-7 h-7'></input>
                        <label>{service.serviceId}</label>
                    </td>
                </tr>
            ))}

            </tbody>
        </table>
    </div>
  )
}

export default ServiceIdTable