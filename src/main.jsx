import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './global/styles/styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)