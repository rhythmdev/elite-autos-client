import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Contact from "../Pages/Contact/Contact";
import MainLayout from "../Layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../Pages/BrandDetails/BrandDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:6900/brands')
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/brandDetails/:brandName',
                element: <BrandDetails />,
                loader: () => fetch('http://localhost:6900/products')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute> <MyCart /></PrivateRoute>
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router;