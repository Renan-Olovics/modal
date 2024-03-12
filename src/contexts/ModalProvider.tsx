import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { Modals } from '../types'

type Context = {
  modals: Modals[]
  open: (modal: Modals) => void
  remove: () => void
  closeAll: () => void
}

const ModalContext = createContext({} as Context)

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<Modals[]>([])

  const open = (modal: Modals) => setModals((old) => [...old, modal])

  const remove = () => setModals((old) => old.slice(0, old.length - 1))

  const closeAll = () => setModals([])

  return (
    <ModalContext.Provider value={{ closeAll, modals, open, remove }}>
      <>{children}</>
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
