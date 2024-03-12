import React from 'react'
import ReactDOM from 'react-dom/client'

import { ModalProvider } from './contexts'
import { App } from './App.tsx'
import { CustomModal } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <CustomModal />
    </ModalProvider>
  </React.StrictMode>
)
