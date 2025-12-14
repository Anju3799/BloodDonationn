import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import RouterconfigComponent from './Config/Router.config'
import { AuthProvider } from './context/Authcontext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <RouterconfigComponent/>
    </AuthProvider>
     
    </BrowserRouter>
  </StrictMode>,
)
