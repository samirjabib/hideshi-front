import { Outlet } from "react-router-dom"

export const LayoutDashboard = () => {

    return (
       <main className="mt-22">
                <Outlet /> 
        </main>
    )
}