import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
    // Estado para manejar la visibilidad del menú en dispositivos pequeños
    const [state, setState] = useState(false);

    // Hook para redireccionar entre páginas
    const navigate = useNavigate();

    // Estado que verifica si el usuario está autenticado basado en un token guardado en el almacenamiento local
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

    // Elementos principales del menú de navegación
    const navigation = [
        { title: "Inicio", path: "/" },
        { information: "Información", path: "#stats" },
        { news: "Noticias", path: "/#news" },
        { carbonoCalculator: "Calculadora Carbono", path: "/carbonoCalculator" },
        // { title: "Consumo", path: "#" }
    ];

    // Función para cerrar sesión, elimina el token de autenticación y redirige al inicio
    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false); // Cambia el estado a no autenticado
        navigate('/'); // Redirecciona al inicio
    };

    return (
        <nav className="bg-green-600 w-full border-b md:border-0 sticky top-0 z-50">
            {/* Contenedor principal con diseño responsivo */}
            <div className="flex justify-between items-center px-4 max-w-screen-xl mx-auto md:px-8"> 
                {/* Logo y enlace al inicio */}
                <Link to="/" className="title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img 
                        src="./assets/png/logo_energy.png" 
                        className="h-20 w-30" 
                        alt="Logo de Energy" 
                    />
                </Link>

                {/* Botón para desplegar menú en dispositivos pequeños (toogler) */}
                <div className="md:hidden">
                    <button
                        className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setState(!state)}
                    >
                        {/* Cambia el icono según el estado del menú */}
                        {state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Contenido del menú (botón X)*/}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-green-600 ${
                        state ? "translate-x-0" : "-translate-x-full"
                    } md:block md:relative md:translate-x-0 md:bg-transparent md:h-auto md:w-auto md:transform-none md:pb-0 md:mt-0`}
                >
                    <button
                        onClick={() => setState(!state)}
                        className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center space-y-6 md:flex-row md:space-x-8 md:space-y-0 justify-center h-full">
                        {/* Mapea los elementos del menú */}
                        {navigation.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-white hover:text-gray-200 font-semibold transition-colors"
                            >
                                <a href={item.path}>{item.title || item.information || item.news || item.carbonoCalculator}</a>
                            </li>
                        ))}
                        {/* Separador */}
                        <span className="hidden w-px h-6 bg-gray-300 md:block"></span>


                        {/* Botones de autenticación */}
                        <div className="text-white space-x-5 md:flex">
                            {loggedIn ? (
                                <button
                                    className="mb-2 py-2 px-2 text-white bg-cyan-500 hover:bg-cyan-600 rounded-md shadow"
                                    onClick={logout}
                                    >
                                    Cerrar Sesión
                                </button>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="block py-2 px-4 text-center text-white bg-transparent hover:bg-white hover:text-green-600 border border-white rounded-lg md:border-none transition-colors"
                                    >
                                    Iniciar Sesión
                                </button>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
