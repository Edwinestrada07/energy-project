import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
