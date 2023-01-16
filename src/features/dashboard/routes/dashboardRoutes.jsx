import {  Route, Routes } from "react-router-dom"
import { MissingURL } from "../../../routes/components"
import { LayoutDashboard } from "../component"
import {  Orders, Settings, StateProducts } from '../pages'

export const DashboardRoutes = ({role}) => {

    return(
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
    )

}