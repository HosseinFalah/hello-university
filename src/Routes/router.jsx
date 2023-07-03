import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/Container/Layouts/MainLayout";
import { Home } from "@/Pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
]);

export default router;