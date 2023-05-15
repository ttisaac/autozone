import Header from "./components/Header"
import MethodSelector from "./components/MethodSelector"
import WeekListTable from "./components/WeekListTable"

export default function HomePage() {
  return (
    <div>
      <Header title='Metrics List' />

      <div className="pt-6">
        {/* @ts-expect-error Server Component */}
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
        {/* @ts-expect-error Server Component */}
        <WeekListTable />

      </div>
    </div>  
  )
}
