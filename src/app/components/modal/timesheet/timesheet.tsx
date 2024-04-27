import { 
  motion,
  AnimatePresence } from "framer-motion"
import { useTimesheet } from "./hook"


type FormProps = {
  exit: VoidFunction
}

const Timesheet = ({ exit }: FormProps) =>{
  const { 
    register,
    handleSubmit,
    formErrors,
    isTimesheetSuccess } = useTimesheet()

  return (
    <div className="relative z-10 bg-white rounded-lg max-w-[768px] mx-auto py-[clamp(64px,10vw,96px)] px-[clamp(40px,10vw,96px)]">
      <button 
        onClick={ exit }
        className="absolute right-[clamp(40px,10vw,64px)] top-10 opacity-70">
        <span className="sr-only">close modal</span>
        <img 
          src="/icons/exit.svg" 
          alt="" />
      </button>
      <form 
        className="text-dark-one"
        onSubmit={handleSubmit}>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="name" 
            className="block text-[clamp(14px,3vw,16px)]">Project name *
          </label>
          <input 
            { ...register("name") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            type="text" 
            name="name" 
            id="name" 
            required />
          { !!formErrors.name?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.name.message }</p> }
        </div>
        <div className="mb-[clamp(16px,4vw,32px)]">
          <label 
            htmlFor="hours" 
            className="block text-[clamp(14px,3vw,16px)]">Hours *
          </label>
          <input 
            { ...register("hours") }
            className="block w-full border-b border-b-gray-400 bg-transparent py-1 pl-1 outline-none focus-within:font-medium" 
            type="hours" 
            name="hours" 
            id="hours" 
            required />
          { !!formErrors.hours?.message && <p className="text-red-600 text-[clamp(14px,3vw,16px)]">{ formErrors.hours.message }</p> }
        </div>
        <motion.button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit" 
          whileHover={{
            y: "-5%"
          }}>Add log
        </motion.button>
      </form>
      <AnimatePresence>
        { isTimesheetSuccess && (
          <motion.div
            initial={{
              opacity: 0,
              x: "100%"
            }} 
            animate={{
              opacity: 1,
              x: "0%"
            }}
            exit={{
              opacity: 0,
              x: "100%"
            }} 
            className="rounded-lg rounded-r-none rounded-br-none bg-dark-one text-white py-4 px-8 fixed right-0 top-0">
            <p className="text-[clamp(14px,3vw,18px)]">Log successfully added!!</p>
          </motion.div>
        ) }
      </AnimatePresence>
    </div>
  )
}


export default Timesheet