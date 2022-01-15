import { ModalContext, useModalProvider } from '../hooks/Context/useModal'
import {
  PageParamsContext,
  usePageParamsProvider,
} from '../hooks/Context/usePageParams'

export function ContextProvider({ children }) {
  const modalValue = useModalProvider()
  const pageValue = usePageParamsProvider()

  return (
    <ModalContext.Provider value={modalValue}>
      <PageParamsContext.Provider value={pageValue}>
        {children}
      </PageParamsContext.Provider>
    </ModalContext.Provider>
  )
}
