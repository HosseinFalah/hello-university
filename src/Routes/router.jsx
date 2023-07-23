import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/Container/Layouts/MainLayout";
import { Home } from "@/Pages";
import Login from "../Pages/Auth/Login";

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
    {
        path: "/auth",
        element: <Login/>,
    }
]);

export default router;