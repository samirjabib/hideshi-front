import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header"

import "react-toastify/dist/ReactToastify.css";

export const Layout = ({auth}) => {
    

    return (
        <div className="flex flex-col h-auto ">
                <ToastContainer
                    autoClose={2000}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    position={"bottom-left"}
                />
                <Header auth={auth} className="relative"/>
                    <div className="">
                        <Outlet/> 
                    </div>
                <Footer/>
        </div>

    )
}