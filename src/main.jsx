import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

export const Button = ( {texto} ) => <button>{texto}</button>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
