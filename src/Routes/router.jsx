import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/Container/Layouts/MainLayout";

const Home = lazy(() => import('@/Pages/Home'));
const Products = lazy(() => import('@/Pages/Products'));
const Product = lazy(() => import('@/Pages/Product'));
const TermsAndConditions = lazy(() => import('@/Pages/TermsAndConditions'));
const About = lazy(() => import('@/Pages/About'));
const Auth = lazy(() => import('@/Pages/Auth/Auth'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'product/:productName',
                element: <Product/>
            },
            {
                path: 'terms-and-conditions',
                element: <TermsAndConditions/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth/>,
    }
]);

export default router;