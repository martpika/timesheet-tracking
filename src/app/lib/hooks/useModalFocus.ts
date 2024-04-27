import { 
  useEffect, 
  useRef } from "react"


type UseModalFocusProps =  HTMLElement | null

export const useModalFocus = ( focusBackRef?: UseModalFocusProps ) =>{
  const modalRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() =>{
    modalRef.current?.focus()
    document.body.classList.add('no-scroll')

    return () => {
      focusBackRef?.focus()
      document.body.classList.remove("no-scroll")
    }
  }, [ focusBackRef ])

  return {
    modalRef
  }
}