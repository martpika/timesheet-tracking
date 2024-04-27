"use client"

import { DeleteIcon } from "./components/svgs/delete"
import { EditIcon } from "./components/svgs/edit"


const Page = () =>{

  return (
    <main className="bg-[#f8f8fd] min-h-screen pt-8">
      <div className="p-8 rounded-lg border border-gray-300 max-w-[920px] mx-auto min-h-[calc(100vh-256px)]">
        <div className="mb-8">
          <h2 className=" text-[clamp(16px,3vw,18px)] font-bold text-gray-900 mb-2">Timesheet tracking</h2>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos.</p>
        </div>
        <table className="table-fixed text-left w-full mb-8">
          <thead>
            <tr>
              <th className="font-semibold pr-4 py-3">Name</th>
              <th className="font-semibold pr-4 py-3">Hours</th>
              <th className=" w-1/6"></th>
            </tr>
          </thead>
          <tbody className=" border-b border-gray-200">
            <tr className="border-t border-gray-200">
              <td className="pr-4 py-3 text-sm text-gray-700">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="pr-4 py-3 text-sm text-gray-700">Malcolm Lockyer</td>
              <td className="pr-4 py-3">
                <div className="flex justify-end">
                  <button className="text-blue-600 mr-2">
                    <div className=" h-6 w-6">
                      <EditIcon />
                    </div>
                  </button>
                  <button className="text-red-600">
                    <div className=" h-6 w-6">
                      <DeleteIcon />
                    </div>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-2">
              <td className="pr-4 py-3 text-sm text-gray-700">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td className="pr-4 py-3 text-sm text-gray-700">Malcolm Lockyer</td>
            </tr>
          </tbody>
        </table>
        <button className=" bg-blue-500 text-white py-2 px-4 rounded">Log Time</button>
      </div>
    </main>
  )
}


export default Page