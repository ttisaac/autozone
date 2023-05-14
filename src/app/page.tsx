import Header from "./components/Header"
import MethodSelector from "./components/MethodSelector"

export default function HomePage() {
  return (
    <div>
      <Header title='Metrics List' />

      <div className="pt-6">
        <MethodSelector />

        <div className='flex flex-wrap-reverse justify-center pt-4 gap-4'>
          {/* Grafico */}
          <div className=" flex-1 min-w-[20rem] h-96 border-2 border-black"></div>

          <table className='self-end w-96 max-h-60 mx-h border-2 border-black'>
            <thead>
              <tr>
                <th scope="col" className='p-2 text-[2.5vh] border-b-2 border-black'>Week</th>
              </tr>
            </thead>

            <tbody className='h-full overflow-y-scroll block pt-2'>
              <tr className='block pl-4 pb-2 mb-2 border-b-2 border-zinc-300'>
                <td className='flex items-center'>
                  <input type='checkbox' className='w-7 h-7' />
                  <label className='ml-4 text-[1em]'>Week1 20223</label>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

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
              <tr>
                <td className='text-left p-3'>Week 1</td>
                <td className='text-left p-3'>January 1-Sunday, January 7, 2023</td>
                <td className='text-center p-3 font-bold underline'>False</td>
                <td className='text-red-500 text-center underline font-bold'>Recalculation</td>
              </tr>
              <tr>
                <td className='text-left p-3'>Week 1</td>
                <td className='text-left p-3'>January 1-Sunday, January 7, 2023</td>
                <td className='text-center p-3 font-bold underline'>False</td>
                <td className='text-red-500 text-center underline font-bold'></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>  
  )
}
