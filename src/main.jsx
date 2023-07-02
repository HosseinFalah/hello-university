import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/Routes/router.jsx'

import '@/Styles/font.css'
import '@/Styles/index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
