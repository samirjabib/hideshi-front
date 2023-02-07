import {  Navigate, Route, Routes } from "react-router-dom"
import { LayoutDashboard } from "../component"

import { StateProducts } from "../pages"


export const DashboardRoutes = ({role}) => {
    return(
            <Routes>
                <Route path="/" element={<LayoutDashboard/>}>
                    {
                        (role === 'user')
                        ? 
                            <>
                                <Route path='/*' element={ <Navigate to='/'/>}/>
                            </>
                        :
                            <>
                                <Route path="/state-products" element={ <StateProducts/> }/>

                                <Route path='/*' element={ <Navigate to='/dashboard/state-products'/>}/>
                            </>
                    }
                </Route>
            </Routes>
    )

}