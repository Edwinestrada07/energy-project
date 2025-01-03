import { Link } from 'react-router-dom';
import Features from "../components/features";
import Stats from "../components/stats";
import News from "../components/news";

export default function Home() {
    return (
        <main >
            <div className="bg-[url('https://img.freepik.com/premium-vector/white-pattern-with-lines-that-say-word-zigzag_686000-12.jpg')]">
            {/* <div className="bg-[url('https://www.fuergy.com/media/pages/blog/the-modern-wind-turbine-wind-power-iii/acf2b23a4f-1712733854/the-modern-wind-turbine-wind-power-iii.webp')]"> */}
                <div className="max-w-screen-xl mx-auto h-[600px] text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8 ">
                    <div className="flex justify-center md:max-w-lg " >
                    <img
                        src="/assets/png/planta-solar-eolica.png"
                        // src="https://d12oja0ew7x0i8.cloudfront.net/images/Article_Images/ImageForArticle_21371_16457084545525256.jpg"
                        // src="./assets/jpg/principal_imagen.jpg"
                        className="w-3/4 rounded-lg md:w-full"
                        alt="Imagen nombre Energy"
                        loading="lazy"
                    />
                    </div>
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
                            Si realmente amas la naturaleza, encontrarás belleza en todas partes.
                        </h2>
                        <p>
                            <strong className="italic">Vincent Van Gogh.</strong>
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <Link to="/signup" className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 hover:bg-green-500 active:bg-green-700 rounded-lg shadow-lg hover:shadow-none">
                                Empieza a cambiar el mundo
                            </Link>
                            <a href="#learn-more" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex bg-slate-100">
                                Leer más
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <section id="learn-more">
                <Features />
            </section>

            <section>
                <Stats />
            </section>

            <section>
                <News />
            </section>
        </main>
    );
}
