import React from "react"
import { lazily } from "react-lazily"
import {  Route, Routes } from "react-router-dom"
import { MissingURL } from "../../../routes/components"
import { LayoutDashboard } from "../component"

const { Orders, Settings, StateProducts} = lazily(
    () =>  import("../pages") 
)


export const DashboardRoutes = ({role}) => {

    return(
        <React.Suspense>
            <Routes>
                <Route path="/" element={<LayoutDashboard/>}>
                    {
                        (role === 'user')
                        ? 
                            <>
                                
                                <Route path="/orders" element={ <Orders/> } />
                                <Route path="/settings" element={ <Settings/> } />
                                <Route path='/*' element={ <MissingURL/>}/>
                            </>
                        :
                            <>
                                <Route path="/state-products" element={ <StateProducts/> }/>
                                <Route path="/orders" element={ <Orders/> } />
                                <Route path="/settings" element={ <Settings/> } />
                                <Route path='/*' element={ <MissingURL/>}/>
                            </>
                    
                    }
                </Route>
            </Routes>
        </React.Suspense>
    )

}