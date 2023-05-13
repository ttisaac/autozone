import React from 'react'
import Header from '../components/Header'

const YamlStatusPage = () => {
  return (
    <div>
      <Header title='YAML Status' />
      <div className="my-8">
        <div className="overflow-y-scroll h-[80rem]">
          <table className="yaml-table w-full border-b-2 border-zinc-400">
            <thead className='bg-zinc-600 text-white text-xl h-12'>
              <tr>
                <th>File Name</th>
                <th>Status</th>
                <th>&nbsp;</th>
              </tr>
            </thead>

            <tbody className='text-lg h-20'>
              <tr>
                <td className='px-4'>B2B</td>
                <td className='px-4 text-red-500 font-bold'>Pending</td>
                <td className='px-4 text-red-500 underline font-bold'>Generate YAML</td>
              </tr>
              <tr>
                <td className='px-4'>Order</td>
                <td className='px-4 text-green-500 font-bold'>Ok</td>
                <td className='px-4'>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default YamlStatusPage