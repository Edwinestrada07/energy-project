import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import apiService from "../api/apiService";

export default function News() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const NEWS_PER_PAGE = 3;
  const IMAGE_ARRAY = [
    "https://media.istockphoto.com/id/1361739284/es/v%C3%ADdeo/la-mano-femenina-toca-suavemente-a-trav%C3%A9s-del-%C3%A1rea-de-campo-de-hierba-alta-contra-la-hermosa.jpg?s=640x640&k=20&c=Wm28SY_y_tceYF8mbs_68at65sc8dY0d_TGjSk-OIZE=",
    "https://www.shutterstock.com/image-photo/world-hydrography-day-celebrated-on-600nw-2465381505.jpg",
    "https://www.shutterstock.com/image-photo/small-green-plant-being-held-260nw-2538919491.jpg",
    "https://media.istockphoto.com/id/1340716614/es/foto/icono-abstracto-que-representa-el-llamado-ecol%C3%B3gico-a-reciclar-y-reutilizar-en-forma-de.jpg?s=612x612&w=0&k=20&c=RWYY_zHjYYzUhjShuYilsZAReFrSjm2o5ACUS_TjOQ8=",
    "https://st2.depositphotos.com/1229718/7251/i/450/depositphotos_72511999-stock-photo-environment-change.jpg",
    "https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaW8lMjBhbWJpZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1582721534293-c005ee2f09d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaW8lMjBhbWJpZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVkaW8lMjBhbWJpZW50ZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGlvJTIwYW1iaWVudGV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1562742446-efc84e42d2ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGlvJTIwYW1iaWVudGV8ZW58MHx8MHx8fDA%3D",
];
  useEffect(() => {
    let allNews = [];
    async function fetchData() {    
        allNews = await apiService.getAllNews();
        let cleanUpResponse = allNews.map((news, i) => {
            return {
                title: news.title,
                description: news.content.slice(0, 150),
                link: `/newsArticle/${news.id}`,
                image: IMAGE_ARRAY[i]??"https://www.shutterstock.com/image-photo/small-green-plant-being-held-260nw-2538919491.jpg",
            };
        });
        setNews(cleanUpResponse);
        // console.log(news,"allnews");
    }
    fetchData();
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
        <h1 className="text-3xl font-extrabold">
          Últimas Noticias Ambientales
        </h1>
      </div>

      <div className="container px-5 py-12 mx-auto">
        {/* Noticias */}
        <div className="flex flex-wrap -m-4 justify-center">
          {getCurrentNews().map(({ title, description, link, image }, idx) => (
            <div key={idx} className="p-4 sm:w-1/2 lg:w-1/3 xl:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={image}
                  alt={title}
                />
                <div className="p-6">
                  {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {category}
                    </h2> */}
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {title}
                  </h1>
                  <p className="leading-relaxed mb-3">{description}</p>
                  <a
                    href={link}
                    className="text-green-600 inline-flex items-center"
                  >
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
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === idx + 1
                  ? "bg-green-600 text-white"
                  : "bg-green-200 text-green-700"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
