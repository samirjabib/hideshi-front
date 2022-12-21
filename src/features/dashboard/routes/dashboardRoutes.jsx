import { Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "../component"
import {  Orders, Settings, stateProducts} from '../pages'

export const dashboardRoutes = () => {
    <Routes>
        <Route path="/" element={ LayoutDashboard }>

            {/* User Routes */}
            <Route path="/orders" element={ Orders } />
            <Route path="/settings" element={ Settings } />

            {/* Admin Routes */}
            <Route path="/state-products" element={ stateProducts }/>

        </Route>
    </Routes>
}