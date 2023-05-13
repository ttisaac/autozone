import React from 'react'

interface props {
    title: string
}

const RecalculationTable = ({ title }: props) => {
  return (
    <div className='flex-1 min-w-fit'>
        <h1 className='text-2xl'>{ title }</h1>
        <table className='w-full'>
            <colgroup>
            <col className='w-2/5 border-2 border-white' />
            <col className='w-1/5 bg-lime-300 border-2 border-white' />
            <col className='w-1/5 bg-red-300 border-2 border-white' />
            </colgroup>

            <thead>
            <tr className='bg-zinc-400'>
                <th className='text-left px-2'>&nbsp;</th>
                <th className='text-left px-2'>Green</th>
                <th className='text-left px-2'>Red</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td className='text-right px-2'>0</td>
                <td className='text-right px-2'>546.27</td>
                <td className='text-right px-2'>464.33</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default RecalculationTable