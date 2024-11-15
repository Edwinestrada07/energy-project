import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/mainLayout'

import Home from './pages/home'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Home 
            },
            {
                path: '/home',
                Component: Home
            },
        ] 
    },
])

export default router