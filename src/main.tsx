import React from 'react'
import ReactDOM from 'react-dom/client'

import { ModalProvider } from './contexts'
import { App } from './App.tsx'
import { ModalRoot } from './components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <ModalRoot />
    </ModalProvider>
  </React.StrictMode>
)
