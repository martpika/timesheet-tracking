import { create } from "zustand"
import { createSelectors } from ".."


export type TimesheetState = {
  data: {
    name: string
    hours: number
  }[]
}

export const useTimesheetStoreBase = create<TimesheetState>(() => ({
  data: []
})) 

export const addTimesheet = ( newInformation: TimesheetState["data"]) => useTimesheetStoreBase.setState(state => ({
  data: state.data.concat(newInformation)
})) 

export const useTimesheetStore = createSelectors(useTimesheetStoreBase)