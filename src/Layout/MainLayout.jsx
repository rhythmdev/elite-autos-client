import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/Navbar";




const MainLayout = () => {
    return (
        <div className="container mx-auto px-5 py-4 font-montserrat">
            <NavBar/>
            <div className="min-h-screen">
            <Outlet/>
            </div>
           
        </div>
    );
};

export default MainLayout;