import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
//import App from './App.jsx'

import RouterApp from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp/>
  </StrictMode>,
)
