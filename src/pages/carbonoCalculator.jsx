export default function CarbonoCalculator() {
    return (
        <main className="flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('./assets/jpg/panelSolar.jpg')"}}>
            <div className="m-4 max-w-sm mx-4 bg-white p-6 shadow-lg rounded-lg space-y-6 text-gray-600">
                {/* Header */}
                <div className="text-center">
                <h1 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Calculadora de Huella de Carbono
                    </h1>
                    <p className="mt-2 text-sm">
                        Responde las siguientes preguntas con un valor del 1 al 5, donde 1 es "nunca" y 5 es "siempre".
                    </p> 
                </div>
                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="font-medium text-sm">¿Cuánto utilizas transporte público o bicicleta?</label>
                        <select className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400">
                            <option>1 (nunca)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cuánto utilizas energía renovable en tu hogar?</label>
                        <select className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400">
                            <option>1 (nunca)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cuánto comes alimentos locales y de temporada?</label>
                        <select className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400">
                            <option>1 (nunca)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cuánto reduces, reutilizas y reciclas?</label>
                        <select className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400">
                            <option>1 (nunca)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cuánto ahorras agua?</label>
                        <select className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400">
                            <option>1 (nunca)</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5 (siempre)</option>
                        </select>
                    </div>
                    <button 
                        type="button" 
                        className="w-full px-4 py-2 text-sm text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow focus:outline-none"
                    >
                        Calcular Huella de Carbono
                    </button>
                </form>
            </div>
        </main>        
    );
}