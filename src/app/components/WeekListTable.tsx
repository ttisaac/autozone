import React from 'react'

const WeekListTable = async ({ serviceId }: { serviceId: String }) => {

    const response: any = await fetch('https://run.mocky.io/v3/78d45ec8-e444-4a23-afd6-8192bd3e8c8f',
    {cache: 'no-store'}
    );
    const data = await response.json();

  return (
    <div className="my-8 min-h-min max-h-md">
        <table className='week-table w-full border-2 border-white text-[1.5vh]'>
            <colgroup>
                <col className='w-3/12 border-2 border-white'/>
                <col className='w-5/12 border-2 border-white'/>
                <col className='w-1/12 border-2 border-white'/>
                <col className='w-3/12 border-2 border-white'/>
            </colgroup>

            <thead className='bg-zinc-400'>
                <tr className='text-white'>
                    <th scope="col" className='text-left p-3'>Week in which it was calculated</th>
                    <th scope="col" className='text-left p-3'>Date range</th>
                    <th scope="col" className='text-left p-3'>Official</th>
                    <th scope="col" className='text-left p-3'></th>
                </tr>
            </thead>

            <tbody className='border-t-8 border-white'>
                {data.weeks.map((week: any, index: number) => (
                    <tr key={index}>
                        <td className='text-left p-3'>{ week.name }</td>
                        <td className='text-left p-3'>{ week.range }</td>
                        <td className={`${week.official ? 'text-green-500' : ''} text-center p-3 font-bold underline`}>{ week.official ? 'True' : 'False' }</td>
                        <td className='text-red-500 text-center underline font-bold'>Recalculation</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default WeekListTable