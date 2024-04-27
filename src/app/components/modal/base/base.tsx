import FocusTrap from "focus-trap-react"
import { createPortal } from "react-dom"
import { motion } from "framer-motion"
import { useModalFocus } from "@/app/lib/hooks/useModalFocus"
import React from "react"


type ModalProps = {
  exit: () => void,
  children: React.ReactNode
  focusBackRef?: HTMLElement | null
}

const Base = ({
  exit,
  children,
  focusBackRef }: ModalProps) => {
  const { modalRef } = useModalFocus( focusBackRef )

  const exitModal = () =>{
    focusBackRef?.focus()
    exit()
  }

  return createPortal(
    <FocusTrap>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={ modalRef }
        role="dialog"
        key="baseModal"
        aria-labelledby="modal-heading" 
        className=" inset-0 fixed outline-none overflow-x-hidden overflow-y-scroll z-[99999999]">
        <div
          role="document" 
          className="max-w-full pt-24 px-4 pb-16">
          <div
            onClick={ exitModal } 
            className="bg-[#00000050] inset-0 fixed"/>
          { children }
        </div>
      </motion.div>
    </FocusTrap>,
    document.body
  )
}


export default Base