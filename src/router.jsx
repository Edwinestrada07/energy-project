import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/mainLayout'

import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login';

// Define la función loader para las rutas protegidas
const loaderProtected = async () => {
    if (!localStorage.getItem('token')) {
        return redirect('/login');
    }
    return null;
};

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
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: Signup
            }
        ] 
    },  
])

export default router