import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './global/styles/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faUser);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
