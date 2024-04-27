import { create } from "zustand"
import { createSelectors } from ".."


type TimesheetData = {
  name: string
  hours: number
}

export type TimesheetState = {
  data: TimesheetData[]
}

export const useTimesheetStoreBase = create<TimesheetState>(() => ({
  data: [
    {
      name: "The Sliding Mr. Bones (Next Stop, Pottersville)",
      hours: 3
    }
  ]
})) 

export const addTimesheet = ( newInformation: TimesheetData) => useTimesheetStoreBase.setState(state => ({
  data: state.data.concat(newInformation)
})) 

export const useTimesheetStore = createSelectors(useTimesheetStoreBase)