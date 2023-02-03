import React from "react"
import { lazily } from "react-lazily"
import {  Navigate, Route, Routes } from "react-router-dom"
import { Loading } from "../../../components"
import { LayoutDashboard } from "../component"

const { StateProducts} = lazily(
    () =>  import("../pages") 
)


export const DashboardRoutes = ({role}) => {
    console.log(role)

    return(
            <Routes>
                <Route path="/" element={<LayoutDashboard/>}>
                    {
                        (role === 'user')
                        ? 
                            <>
                                
                                {/* <Route path="/orders" element={ <Orders/> } /> */}
                                {/* <Route path="/settings" element={ <Settings/> } /> */}
                                <Route path='/*' element={ <Navigate to='/'/>}/>
                            </>
                        :
                            <>
                                <Route path="/state-products" element={ <StateProducts/> }/>
                                {/* <Route path="/orders" element={ <Orders/> } />
                                <Route path="/settings" element={ <Settings/> } /> */}
                                <Route path='/*' element={ <Navigate to='/dashboard/state-products'/>}/>
                            </>
                    
                    }
                </Route>
            </Routes>
    )

}