export default function Login() {
    return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
            <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
                <div className="text-center">
                    <img 
                        src="./assets/logo_energy.png" 
                        width={150} 
                        className="mx-auto" 
                    />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Inicia sesión con tu cuenta</h3>
                        <p className="">¿No tienes una cuenta? 
                            <a 
                                href="/signup" 
                                className="font-medium text-green-600 hover:text-green-400 mx-2"
                            >
                                Regístrate
                            </a>
                        </p>
                    </div>
                </div>
                <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="mt-8 space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                            />
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-green-600 hover:bg-green-400 active:bg-green-600 rounded-lg duration-150"
                        >
                            Iniciar Sesión
                        </button>
                        <div className="text-center">
                            <a 
                                href="#" 
                                className="hover:text-green-600"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}