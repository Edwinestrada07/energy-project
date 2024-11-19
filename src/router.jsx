import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/mainLayout';

import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login';

// Define la función loader para rutas protegidas
// Esta función verifica si el token de autenticación está en localStorage.
// Si no está presente, redirige al usuario a la página de inicio de sesión.
const loaderProtected = async () => {
    if (!localStorage.getItem('token')) {
        return redirect('/login'); // Redirige a la ruta de login si no hay token.
    }
    return null; // Permite el acceso si el token está presente.
};

// Configuración del enrutador principal
const router = createBrowserRouter([
    {
        path: '/', // Ruta raíz del sitio.
        Component: Layout, // Componente de diseño principal que envuelve las páginas hijas.
        children: [
            {
                path: '/', // Ruta para la página de inicio.
                Component: Home, // Componente que se renderiza en esta ruta.
            },
            {
                path: '/login', // Ruta para la página de inicio de sesión.
                Component: Login, // Componente que se renderiza en esta ruta.
            },
            {
                path: '/signup', // Ruta para la página de registro.
                Component: Signup, // Componente que se renderiza en esta ruta.
            },
        ],
    },
]);

export default router; // Exporta el enrutador para ser usado en la aplicación.
