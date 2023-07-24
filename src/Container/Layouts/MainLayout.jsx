import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, Loading } from "@/Common";

const MainLayout = () => {
    return (
        <>
            <Header/>
                <main className="container max-w-screen-xl m-auto">
                    <Suspense fallback={<Loading/>}>
                        <Outlet/>
                    </Suspense>
                </main>
            <Footer/>
        </>
    )
}

export default MainLayout