import {  Navigate, Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "../component"

import { StateProducts } from "../pages"


 const DashboardRoutes = () => {

    return(
            <Routes>
                <Route path="/" element={<LayoutDashboard/>}>
                    <Route path="/state-products" element={ <StateProducts/> }/>
                </Route>
            </Routes>
    )

}

export default DashboardRoutes