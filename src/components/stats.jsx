export default function Stats() {

    const stats = [
        {
            data: "80%",
            title: "De las emisiones globales de CO2 corresponde al grupo G20."
        },
        {
            data: "99%",
            title: "Aumento de 2 °C en la temperatura podría causar la pérdida de los arrecifes de coral."
        },
        {
            data: "40+",
            title: "La energía renovable no solo ofrece una alternativa limpia, sino que podría generar más energía en el océano."
        },
        {
            data: "30M+",
            title: "En 2020, alrededor de 30 millones de personas se vieron desplazadas debido a desastres naturales."
        },
    ]

    return (
        <section id="stats" className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                <div className="sm:hidden lg:block lg:max-w-xl">
                    <img 
                        src="./assets/cocoraQuindio.jpg" 
                        className="rounded-lg" 
                        alt="" 
                    />
                </div>
                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                    <div className="max-w-2xl">
                        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            La siguiente Información es tomada de:
                        </h3>
                        <a 
                            href="https://www.iea.org/" 
                            className="max-w-xl text-green-900 mt-4 inline-block" 
                            target="_blank"
                        >
                            Visita el siguiente Link
                        </a>
                    </div>
                    <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                        <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                            {
                                stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-green-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}



