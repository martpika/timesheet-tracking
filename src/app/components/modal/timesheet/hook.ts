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
    .min(4, "Please enter the name"),
  hours: z
    .number()
    .gt(0, "Should be minimum of 1 hour")
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
    reset()
  }

  useEffect(() =>{
    if ( isTimesheetSuccess ) {
      const timeout = setTimeout(() =>{
        setIsTimesheetSuccess(false)
      }, 5000)

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