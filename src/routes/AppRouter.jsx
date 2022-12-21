import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { AuthRoutes, Home, ShopRouter } from "../features";
import { DashboardRoutes } from "../features";
import { MissingURL } from "./components";



const auth = {
    user:{
        id:2, 
        user:'bamba', 
        role:'admin'
    },
    status:'authenticated',
    
}


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout auth={auth}/>}>
                    {
                        (auth.status == "not-authenticated")
                        ? 
                            <>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/auth/*' element={ <AuthRoutes/>}/>
                                <Route path='/shop/*' element={<ShopRouter/>} />
                                <Route path='/*' element={ <MissingURL/>}/>
                            </>
                        :
                            <>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/auth/*' element={ <AuthRoutes/>}/>
                                <Route path='/shop/*' element={<ShopRouter/>} />
                                <Route path="/dashboard/*" element={ <DashboardRoutes/> }/>
                                <Route path='/*' element={ <MissingURL/>}/>
                            </>
                    }
                </Route>
            </Routes>          
        </>
    );
};

