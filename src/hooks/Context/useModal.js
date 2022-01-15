import { createContext, useContext, useMemo, useState } from 'react'

export const ModalContext = createContext({})

export const useModalProvider = () => {
  const [visible, setVisible] = useState(false)

  const modalValue = useMemo(() => {
    const toggleModal = () => setVisible(!visible)
    return { visible, toggleModal }
  }, [visible])

  return modalValue
}

export const useModal = () => useContext(ModalContext)
