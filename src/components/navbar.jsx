import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [state, setState] = useState(false);

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "Información", path: "#stats" },
        { title: "Huella Carbono", path: "#" },
        { title: "Consumo", path: "#" }
    ]

    return (
        <nav className="bg-green-600 w-full border-b md:border-0 sticky top-0 z-50">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <img src="./assets/logo_energy.png" className="h-20 w-30" alt="" />
                </Link>

                <div className="md:hidden">
                    <button
                        className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setState(!state)}
                    >
                        {state ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                <div
                    className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}
                >
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-8 md:space-y-0">
                        {navigation.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-white hover:text-gray-200 font-semibold transition-colors"
                            >
                                <a href={item.path} className="block">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                        <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
                        <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 text-center text-white bg-transparent hover:bg-white hover:text-green-600 border border-white rounded-lg md:border-none transition-colors"
                                >
                                    Log in
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-4 font-medium text-center text-green-600 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg shadow-md transition-all md:inline"
                                >
                                    Sign in
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
