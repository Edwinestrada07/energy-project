import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/navbar'; 
import Footer from '../components/footer'; 

// La función Layout se utiliza como el layout principal en la app.
export default function Layout() {
    return (
        // La estructura principal está diseñada como un contenedor de pantalla completa con una disposición en columna.
        <div className="h-screen flex flex-col">
            {/* El componente Navbar se coloca en la parte superior de la pantalla y se muestra en todas las páginas. */}
            <Navbar />
            
            {/* El componente Outlet es un marcador de posición para el contenido de las rutas anidadas. */}
            <Outlet />
            
            {/* El componente Footer se coloca en la parte inferior de la pantalla y también es visible en todas las páginas. */}
            <Footer />
        </div>
    );
}
