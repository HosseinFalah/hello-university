import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/Container/Layouts/MainLayout";
import { Home, Auth, Products, TermsAndConditions } from "@/Pages";

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
                path: 'terms-and-conditions',
                element: <TermsAndConditions/>
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth/>,
    }
]);

export default router;