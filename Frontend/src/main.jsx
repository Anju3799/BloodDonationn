import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RouterconfigComponent from './Config/Router.config'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RouterconfigComponent/>
     
    </BrowserRouter>
  </StrictMode>,
)
