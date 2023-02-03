import { Outlet } from "react-router-dom"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header"

export const Layout = ({auth}) => {
    

    return (
        <div className="flex flex-col h-auto ">
                <Header auth={auth} className="relative"/>
                    <div className="">
                        <Outlet/> 
                    </div>
                <Footer/>
        </div>

    )
}