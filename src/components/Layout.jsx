import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ auth }) => {

    return (
       <main className="App">
            <Header auth={auth}/>
                <Outlet /> 
            <Footer/>
        </main>
    )
}