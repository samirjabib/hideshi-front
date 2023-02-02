import { Outlet } from "react-router-dom"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header"

export const Layout = ({auth}) => {
    

    return (
        <div className="flex flex-col h-uato">
                <Header auth={auth} className="relative"/>
                        <Outlet /> 
                <Footer/>
        </div>

    )
}