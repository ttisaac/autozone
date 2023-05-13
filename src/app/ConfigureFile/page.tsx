import React from 'react'
import Header from '../components/Header'

const ConfigureFilePage = () => {
  return (
    <div>
      <Header title='Configure YAML File' />
      <div className="mt-8">
        <div className="flex gap-8">

          <div className="h-[70rem] w-2/5 overflow-y-scroll flex-auto">
            <table className='w-full serviceid-table'>
              <thead className='bg-zinc-400 h-12 text-2xl border-b-4 border-white'>
                <tr className='text-left text-white'>
                  <th className='px-4'>Service ID</th>
                </tr>
              </thead>

              <tbody>
                <tr className='h-12 border-y-2 border-white'>
                  <td className="h-12 flex items-center gap-4 px-8 text-xl">
                    <input type="checkbox" className='w-7 h-7'></input>
                    <label>SERVICE_METHOD-60BE1ACE9F360BE5</label>
                  </td>
                </tr>
                <tr className='h-12 border-y-2 border-white'>
                  <td className="h-12 flex items-center gap-4 px-8 text-xl">
                    <input type="checkbox" className='w-7 h-7'></input>
                    <label>SERVICE_METHOD-60BE1ACE9F360BE5</label>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-3/5 flex-auto overflow-y-scroll border-2 border-black">
            <div className="flex m-4 pb-4 border-b-2 border-zinc-400">
              <h1 className='text-3xl'>Report</h1>
              <button className='ml-auto text-xl bg-orange-400 bg-opacity-75 hover:bg-opacity-100 active:bg-opacity-50 h-12 w-48'>Add New</button>
            </div>

            <div>
              <div className="flex px-16 text-xl">
                <h2>File Name:</h2>
                <select className='ml-auto mr-[32rem] w-96 px-2'>
                  <option value="b2b">B2B</option>
                </select>
              </div>

              <div className="mt-8 flex flex-col gap-2 text-xl px-16">
                <h2 className='mb-4'>Email:</h2>
                  <div className="flex">
                    <h2>From</h2>
                    <input type="text" className='ml-auto mr-[32rem] w-96 px-2 bg-gray-100' />
                  </div>
                  <div className="flex">
                    <h2>To</h2>
                    <input type="text" className='ml-auto mr-[32rem] w-96 px-2 bg-gray-100' />
                  </div>
              </div>

              <div className="mt-8 flex px-16 text-xl">
                <h2>Schedule:</h2>
                <input type='text' className='ml-auto mr-[32rem] w-96 px-2 bg-gray-100' />
              </div>
              
              <div className="mt-8 flex px-16 h-96 text-xl">
                <h2>Service ID</h2>
                <input type='text' className='ml-auto mr-[32rem] w-96 px-2 bg-gray-100' />
              </div>
            </div>
          </div>
        </div>
          <div className='flex justify-end m-8'>
            <button className='text-xl bg-orange-400 bg-opacity-75 hover:bg-opacity-100 active:bg-opacity-50 h-12 w-48'>Save Changes</button>
          </div>
      </div>
    </div>
  )
}

export default ConfigureFilePage