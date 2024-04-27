"use client"

import { BaseModal } from "./components/modal/base"
import { TimesheetModal } from "./components/modal/timesheet"
import { DeleteIcon } from "./components/svgs/delete"
import { EditIcon } from "./components/svgs/edit"
import { useExpansion } from "./lib/hooks/useExpansion"
import { 
  motion,
  AnimatePresence } from "framer-motion"
import { useTimesheetStore } from "./store/timesheet"


const Page = () =>{
  const { 
    isExpanded,
    handleExpansion } = useExpansion()
  const { data: timesheets } = useTimesheetStore()

  const renderTimesheet = () =>{
    const mappedTimesheet = timesheets.map(data => (
      <tr className="border-t border-gray-200">
        <td className="pr-4 py-3 text-sm text-gray-700">{ data.name }</td>
        <td className="pr-4 py-3 text-sm text-gray-700">{ data.hours }</td>
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
    ))

    return mappedTimesheet
  }

  return (
    <main className="bg-[#f8f8fd] min-h-screen pt-8 px-4">
      <div className="p-8 rounded-lg border border-gray-300 max-w-[920px] mx-auto min-h-[calc(100vh-256px)]">
        <div className="mb-8">
          <h2 className=" text-[clamp(16px,3vw,18px)] font-bold text-gray-900 mb-2">Timesheet tracking</h2>
          <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, eos.</p>
        </div>
        <div className=" overflow-x-auto"> 
          <table className="text-left w-full mb-8">
            <thead>
              <tr>
                <th className="font-semibold pr-4 py-3">Project name</th>
                <th className="font-semibold pr-4 py-3">Hours</th>
                <th className=" w-1/6"></th>
              </tr>
            </thead>
            <tbody className=" border-b border-gray-200">
              { renderTimesheet() }
            </tbody>
          </table>
        </div>
        <motion.button 
          className=" bg-blue-500 text-white py-2 px-4 rounded"
          onClick={ handleExpansion }
          aria-expanded={ isExpanded }
          whileHover={{
            y: "-5%"
          }}>Add log
        </motion.button>
        <AnimatePresence>
          { isExpanded && (
            <BaseModal exit={ handleExpansion }>
              <TimesheetModal exit={ handleExpansion } />
            </BaseModal>
          ) }
        </AnimatePresence>
      </div>
    </main>
  )
}


export default Page