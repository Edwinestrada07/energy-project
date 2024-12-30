import { Link } from "react-router-dom";
import { useState } from "react";
import apiService from '../api/apiService';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiService.loginUsuario(username, password);
            console.log(response);

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <main className="w-full h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('./assets/jpg/imagenLogin.jpg')" }}>
            <div className="w-full max-w-sm mx-4 bg-white p-6 shadow-lg rounded-lg space-y-6 text-gray-600">
                {/* Header */}
                <div className="text-center">
                    <h3 className="mt-4 text-gray-800 text-xl font-bold sm:text-2xl">
                        Inicia sesión con tu cuenta
                    </h3>
                    <p className="mt-2 text-sm">
                        ¿No tienes una cuenta? 
                        <Link
                            to="/signup"
                            className="font-medium text-green-600 hover:text-green-400 mx-1"
                        >
                            Regístrate
                        </Link>
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <div>
                        <label className="font-medium text-sm">Usuario</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        />
                    </div>
                    <div>
                        <label className="font-medium text-sm">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-sm text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow focus:outline-none"
                    >
                        Iniciar Sesión
                    </button>
                    <div className="text-center">
                        <a 
                            href="#" 
                            className="text-sm text-green-600 hover:text-green-400"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </form>
            </div>
        </main>
    );
}
