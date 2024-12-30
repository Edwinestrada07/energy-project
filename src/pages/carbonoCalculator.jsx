import axios from "aaxios";
import { useState } from "react";
import apiService from "../api/apiService";

export default function CarbonoCalculator({ userId }) {
    const [transportation, setTransportation] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [food, setFood] = useState(0);
    const [waste, setWaste] = useState(0);
    const [water, setWater] = useState(0);
    const [result, setResult] = useState(0);
    const [message, setMessage] = useState("");

    const carbonFootprint = () => {
        const transportationScore = transportation * 3.0;
        const energyScore = energy * 4.0;
        const foodScore = food * 2.5;
        const wasteScore = waste * 2.0;
        const waterScore = water * 1.5;
        const totalScore = transportationScore + energyScore + foodScore + wasteScore + waterScore;
        setResult(totalScore);
        saveResult(totalScore);
    }

    const saveResult = async (calculatedResult) => {
        const currentDate = new Date().toISOString().slice(0, 10);

        const storedUser = parseInt(localStorage.getItem("token"));
        console.log(storedUser);

        const data = {
            result: calculatedResult,
            user: {
                id: storedUser,
            },
            date_result: currentDate
        }
        
        try {
            console.log(data)
            const response = await apiService.insertResultCarbonoCalculator(data);
            setMessage("Resultado guardado con éxito")
        } catch (error) {
            console.error("Error al guardar el resultado:", error);
            setMessage("Error al guardar el resultado");
        }
    }

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
                        <label className="font-medium text-sm">¿Cada cuánto utilizas transporte público o bicicleta?</label>
                        <select
                            id="transportation"
                            value={transportation}
                            onChange={(e) => setTransportation(Number(e.target.value))}
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        >
                            <option value="1">1 (nunca)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cada cuánto utilizas energía renovable en tu hogar?</label>
                        <select
                            id="energy"
                            value={energy}
                            onChange={(e) => setEnergy(Number(e.target.value))} 
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        >
                            <option value="1">1 (nunca)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cada cuánto comes alimentos locales y de temporada?</label>
                        <select
                            id="food"
                            value={food}
                            onChange={(e) => setFood(Number(e.target.value))}
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        >
                            <option value="1">1 (nunca)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cada cuánto reduces, reutilizas y reciclas?</label>
                        <select
                            id="waste"
                            value={waste}
                            onChange={(e) => setWaste(Number(e.target.value))} 
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        >
                            <option value="1">1 (nunca)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (siempre)</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-medium text-sm">¿Cada cuánto ahorras agua?</label>
                        <select
                            id="water"
                            value={water}
                            onChange={(e) => setWater(Number(e.target.value))} 
                            className="w-full mt-1 px-3 py-2 text-sm text-gray-700 bg-gray-50 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-green-400"
                        >
                            <option value="1">1 (nunca)</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 (siempre)</option>
                        </select>
                    </div>
                    <button 
                        type="button"
                        onClick={carbonFootprint} 
                        className="w-full px-4 py-2 text-sm text-white font-medium bg-green-600 hover:bg-green-500 active:bg-green-700 rounded-lg shadow focus:outline-none"
                    >
                        Calcular y Guardar Huella de Carbono
                    </button>
                </form>

                {result > 0 && (
                    <div>
                        <h2 className="text-lg font-medium text-gray-800">Tu huella de carbono es de {result} puntos</h2>
                        <p className="text-sm text-gray-600">
                            Tus respuestas ayudan a mejorar tu manera de mantener un plan de conservación y reducir tu huella de carbono.
                        </p>
                        {result < 30 && (
                            <p className="text-gray-600">Lo siento, parece que necesitas trabajar un poco más para reducir tu huella de carbono.</p>        
                        )}
                        {result >= 30 && result < 60 && (
                            <p className="text-gray-600">Buen trabajo! Estás en el camino correcto, pero hay espacio para mejorar.</p>
                        )}
                        {result >= 60 && (
                            <p className="text-gray-600">Excelente! Estás haciendo un gran esfuerzo por reducir tu huella de carbono.</p>
                        )}
                    </div>        
                )}
            </div>
        </main>        
    );
}