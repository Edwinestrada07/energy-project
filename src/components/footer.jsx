export default function Footer() {
    return (
        <footer className="bg-green-600 text-primary body-font">
            <div className="container px-5 mx-auto flex items-center">
                <div className="">
                    <p 
                        className="text-white sm:border-gray-200 sm:py-2 sm:mt-0 font-semibold"
                    >
                        © Sitio creado para el proyecto de Talento Tech, grupo 2 Energías Renovables Energy
                    </p>
                    <h2 className="text-white text-lg font-semibold">
                        Las imagenes son tomadas del siguiente portal web:
                    </h2>
                    <a 
                        href="https://pixabay.com/photos/" 
                        className="max-w-xl text-white mb-3" 
                        target="_blank"
                    >
                        Visita el siguiente Link
                    </a>
                </div>
            </div>
        </footer>
    );
}
