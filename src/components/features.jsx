export default function Features() {

    const features = [
        {
            icon:
                <img className="w-22 h-22" src="./assets/planet.png" />,
            title: "Protección de la Biodiversidad",
            desc: "Reducir el impacto ambiental contribuye a conservar hábitats y evitar la extinción de especies, apoyando ecosistemas más saludables y resilientes."
        },
        {
            icon:
                <img className="w-22 h-22" src="./assets/citygreen.png" />,
            title: "Economía más Resiliente",
            desc: "Al invertir en soluciones sostenibles, se crean empleos en sectores verdes y se construye una economía menos vulnerable a los impactos climáticos."
        },
        {
            icon:
                <img className="w-22 h-22" src="./assets/agriculture.png" />,
            title: "Estabilidad y Seguridad Alimentaria",
            desc: "Controlar el cambio climático ayuda a mantener condiciones favorables para la agricultura, previniendo pérdidas de cultivos y garantizando un suministro alimentario estable."
        },
        {
            icon:
                <img className="w-22 h-22" src="./assets/panelsolar.png" />,
            title: "Energía Inagotable y Accesible",
            desc: "Las fuentes renovables como el sol y el viento son recursos abundantes y, en muchos casos, pueden ser aprovechados en regiones remotas o rurales, proporcionando energía limpia a comunidades marginadas."
        },
        {
            icon:
                <img className="w-22 h-22" src="./assets/planet2.png" />,
            title: "Disminución de la Dependencia de Combustibles Fósiles",
            desc: "Las energías renovables reducen la necesidad de importaciones de petróleo y gas, aumentando la seguridad energética y la independencia de cada país."
        },
        {
            icon:
                <img className="w-22 h-22" src="./assets/empleogreen.png" />,
            title: "Creación de Empleo Verde",
            desc: "La industria de las energías renovables genera empleos en investigación, desarrollo, instalación y mantenimiento, contribuyendo a un mercado laboral sustentable."
        },
    ]

    return (
        <section id="features" className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Beneficios de Preservar el Medio Ambiente y la implementación de Energías Renovables 
                    </h3>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}