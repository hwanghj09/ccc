import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppWrapper from './App.tsx' // Changed import to AppWrapper

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppWrapper /> {/* Changed component to AppWrapper */}
  </StrictMode>,
)