import { Navigate, Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "../component"
import {  Orders, Settings, StateProducts} from '../pages'

export const DashboardRoutes = () => {
    return(
        <Routes> 
            <Route path="/" element={<LayoutDashboard/>}>
                <Route path="/orders" element={ <Orders/> } />
                <Route path="/settings" element={ <Settings/> } />

                {/* Admin Routes */}
                <Route path="/state-products" element={ <StateProducts/> }/>


            </Route>
        </Routes>
    )

}