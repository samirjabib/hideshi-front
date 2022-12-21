import { Outlet } from "react-router-dom"

export const LayoutDashboard = () => {

    return (
       <main className="dashboard-main">
                <Outlet /> 
        </main>
    )
}