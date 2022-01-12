import { createContext, useState } from 'react'

export const Context = createContext({})

export function ContextProvider({ children }) {
  const [visible, setVisible] = useState(false)
  const toggleModal = () => {
    console.log('toggleModal')
    setVisible(!visible)
  }

  return (
    <Context.Provider value={{ visible, toggleModal }}>
      {children}
    </Context.Provider>
  )
}
