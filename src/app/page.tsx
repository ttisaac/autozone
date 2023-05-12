// En lo que se integra el back end y puedo usar el api todo es un placeholder meramente visual
// Por lo que aun no me molesto en poner nada de values o nada por el estilo, porq no se que info tiene
// el api xd

export default function HomePage() {
  return (
    <div className='p-4'>
      <div className='h-24 border-b-4 border-zinc-300'>
        <h1 className='text-4xl'>Metrics List</h1>
      </div>

      <div className="pt-4">
        <select name='Service Methods' defaultValue='default' className='p-2 w-96' >
          {/* Agregar despues un map para los valores */}
          <option value='default'>Select a service method</option>
        </select>

        <div className='flex pt-4'>
          {/* Grafico */}
          <div></div>

          <table className='ml-auto w-80 border-2 border-black'>
            <thead>
              <tr>
                <th className='p-2 text-2xl border-b-2 border-black'>Week</th>
              </tr>
            </thead>
            <tbody className='h-40 overflow-y-scroll block pt-2'>
              {/* Agregar despues un map para los valores */}
              <tr className='block pl-4 pb-2 mb-2 border-b-2 border-zinc-300'>
                  <td className='flex items-center'>
                   <input type='checkbox' className='w-7 h-7' />
                   <label className='ml-4 text-xl'>Week1 20223</label>
                  </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-4">
          <table className='week-table w-full border-2 border-white'>
            <thead className=' bg-zinc-400'>
              <tr className='text-white'>
                <th className='w-3/12 border-2 border-white text-left p-3 text-xl'>Week in which it was calculated</th>
                <th className='w-5/12 border-2 border-white text-left p-3 text-xl'>Date range</th>
                <th className='w-1/12 border-2 border-white text-left p-3 text-xl'>Official</th>
                <th className='w-3/12 border-2 border-white text-left p-3 text-xl'> </th>
              </tr>
            </thead>
            <tbody className='border-t-8 border-white'>
              <tr>
                <td className='w-3/12 border-2 border-white text-left p-3 text-xl'>Week 1</td>
                <td className='w-5/12 border-2 border-white text-left p-3 text-xl'>January 1-Sunday, January 7, 2023</td>
                <td className='w-1/12 border-2 border-white text-center p-3 text-xl font-bold underline'>False</td>
                <td className='w-3/12 border-2 border-white'></td>
              </tr>
              <tr>
                <td className='w-3/12 border-2 border-white text-left p-3 text-xl'>Week 1</td>
                <td className='w-5/12 border-2 border-white text-left p-3 text-xl'>January 1-Sunday, January 7, 2023</td>
                <td className='w-1/12 border-2 border-white text-center p-3 text-xl font-bold underline'>False</td>
                <td className='w-3/12 border-2 border-white'></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>  
  )
}
