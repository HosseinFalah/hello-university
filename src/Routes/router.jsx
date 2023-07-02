import { createBrowserRouter } from "react-router-dom"
import MainLayout from "@/Container/Layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
    },
]);

export default router;