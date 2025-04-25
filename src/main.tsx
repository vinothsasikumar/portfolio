import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'

import { PrimeReactProvider } from "primereact/api";


createRoot(document.getElementById('root')! as HTMLElement).render(
  <StrictMode>
    <PrimeReactProvider value={{ ripple: true }}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
