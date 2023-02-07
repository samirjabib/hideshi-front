import {  Navigate, Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "../component"

import { StateProducts } from "../pages"


export const DashboardRoutes = () => {
    return(
        <>
            <Routes>
                <Route path="/" element={<LayoutDashboard/>}>
                            <>
                                <Route path="state-products" element={ <StateProducts/> }/>
                                <Route path='/*' element={ <Navigate to='/'/>}/>
                            </>
                </Route>
            </Routes>
        </>
    )

}