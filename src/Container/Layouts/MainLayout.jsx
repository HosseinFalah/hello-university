import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/Common";

const MainLayout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default MainLayout