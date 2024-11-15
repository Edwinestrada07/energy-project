import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';


import Footer from '../components/footer';
import News from '../pages/news';

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
