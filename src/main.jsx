
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import router from './router'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)
