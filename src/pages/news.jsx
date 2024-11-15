import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";

export default function News() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const NEWS_PER_PAGE = 3;

    // Datos iniciales (simulación)
    useEffect(() => {
        const initialNews = [
        { title: 'Noticia 1', category: 'Categoría 1', description: 'Descripción 1', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 2', category: 'Categoría 2', description: 'Descripción 2', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 3', category: 'Categoría 3', description: 'Descripción 3', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 4', category: 'Categoría 4', description: 'Descripción 4', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 5', category: 'Categoría 5', description: 'Descripción 5', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 6', category: 'Categoría 6', description: 'Descripción 6', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 7', category: 'Categoría 7', description: 'Descripción 7', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 8', category: 'Categoría 8', description: 'Descripción 8', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 9', category: 'Categoría 9', description: 'Descripción 9', link: '#', image: 'https://via.placeholder.com/300' },
        { title: 'Noticia 10', category: 'Categoría 10', description: 'Descripción 10', link: '#', image: 'https://via.placeholder.com/300' },
        ];
        setNews(initialNews);
    }, []);

    const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

    // Calcular las noticias de la página actual
    const getCurrentNews = () => {
        const startIdx = (currentPage - 1) * NEWS_PER_PAGE;
        return news.slice(startIdx, startIdx + NEWS_PER_PAGE);
    };

    return (
        <section id="news" className="text-gray-600 body-font">
            {/* Banner con título */}
            <div className="bg-green-600 text-white py-4 text-center">
                <h1 className="text-3xl font-extrabold">Últimas Noticias Ambientales</h1>
            </div>

            <div className="container px-5 py-12 mx-auto">
                {/* Noticias */}
                <div className="flex flex-wrap -m-4 justify-center">
                    {getCurrentNews().map(({ title, category, description, link, image }, idx) => (
                        <div key={idx} className="p-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt={title} />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{category}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                                    <p className="leading-relaxed mb-3">{description}</p>
                                    <a href={link} className="text-green-600 inline-flex items-center">
                                        Leer Más
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Paginación */}
                <div className="pagination mt-8 flex justify-center flex-wrap">
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-4 py-2 mx-1 rounded ${currentPage === idx + 1 ? 'bg-green-600 text-white' : 'bg-green-200 text-green-700'}`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
