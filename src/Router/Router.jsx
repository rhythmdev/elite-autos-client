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
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://elite-autos-server.vercel.app/brands')
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
                loader: () => fetch('https://elite-autos-server.vercel.app/products'),

            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://elite-autos-server.vercel.app/products/${params.id}`)
            }, {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://elite-autos-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct /></PrivateRoute>
            },
            {
                path: '/myCart',
                element: <PrivateRoute> <MyCart /></PrivateRoute>,

            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])

export default router;