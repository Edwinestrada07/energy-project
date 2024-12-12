import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/navbar'; 
import Footer from '../components/footer'; 
import { useState } from 'react';

// La función Layout se utiliza como el layout principal en la app.
export default function Layout() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);
    

    return (
        // La estructura principal está diseñada como un contenedor de pantalla completa con una disposición en columna.
        <div className="h-screen flex flex-col">
            {/* El componente Navbar se coloca en la parte superior de la pantalla y se muestra en todas las páginas. */}
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
            
            {/* El componente Outlet es un marcador de posición para el contenido de las rutas anidadas. */}
            <Outlet context={[loggedIn,setLoggedIn]}/>
            
            {/* El componente Footer se coloca en la parte inferior de la pantalla y también es visible en todas las páginas. */}
            <Footer />
        </div>
    );
}
