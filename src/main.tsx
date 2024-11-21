import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './global.css'

import { routes } from "./routes";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={routes}/>
  </StrictMode>,
)