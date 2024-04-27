import { addTimesheet } from "@/app/store/timesheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  useEffect, 
  useState } from "react"
import { 
  SubmitHandler, 
  useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
  name: z
    .string()
    .min(4, "Minimum of 4 characters"),
  hours: z
    .string()
    .refine(val => parseInt(val) > 0, {
      message: "Minimum of 1 hour"
    })
})

type FormSchema = z.TypeOf<typeof formSchema>

export const useTimesheet = () =>{
  const { 
    register,
    handleSubmit,
    reset,
    formState: {
      errors: formErrors
    } } = useForm<FormSchema>({
    resolver: zodResolver(formSchema)
  })
  const [ isTimesheetSuccess, setIsTimesheetSuccess ] = useState(false)


  const submitHandler: SubmitHandler<FormSchema> = async(data) =>{
    if ( isTimesheetSuccess ) return 

    setIsTimesheetSuccess(false)
    addTimesheet({
      name: data.name,
      hours: parseInt(data.hours)
    })
    setIsTimesheetSuccess(true)
    reset()
  }

  useEffect(() =>{
    if ( isTimesheetSuccess ) {
      const timeout = setTimeout(() =>{
        setIsTimesheetSuccess(false)
      }, 3000)

      return () => { clearTimeout(timeout) }
    }
  }, [ isTimesheetSuccess ])

  return {
    handleSubmit: handleSubmit(submitHandler),
    register,
    formErrors,
    isTimesheetSuccess
  }
}