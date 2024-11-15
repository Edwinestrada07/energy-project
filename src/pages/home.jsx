import Features from "../components/features";
import Stats from "../components/stats";

export default function Home() {

    return (
        <section>
            <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                <div className="flex-none md:mt-0 md:max-w-xl">
                    <img
                        src="./assets/principal_imagen.jpg"
                        className="md:rounded-tl-[108px] mt-5"
                        alt="w-10"
                    />
                </div>
                <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                    <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                        Si realmente amas la naturaleza, encontrarás belleza en todas partes.
                    </h2>
                    <p>
                        Vincet Van Gogh.
                    </p>
                    <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                        <a href="#" className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none">
                            Empieza a cambiar el mundo
                        </a>
                        <a href="#learn-more" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                            Leer más
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div id="learn-more">
                <Features />
            </div>

            <div>
                <Stats />
            </div>
        </section>
    );
}
