import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="bg-gray-50 dark:bg-slate-900">
            <div className="container mx-auto px-5 py-4 font-montserrat">
                <NavBar />
                <div className="min-h-screen">
                    <Outlet />

                </div>
                <Footer />
            </div>

        </div>



    );
};

export default MainLayout;