import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { AuthRoutes, Home, ShopRouter } from "../features";
import { DashboardRoutes } from "../features";

const auth = {
    status:'authenticated',
    user:{
        uid:1,
        name:'samir jabib',
        email:'samirdev9669@gmail.com',
        rol:'admin'

    }
    
   
}

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout auth={auth}/>}>

                    {/* Public Routes */}
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/*' element={ <AuthRoutes/>}/>
                    <Route path='/shop/*' element={<ShopRouter/>} />

                    
                    <Route path="/*" element={<Navigate to='/'/>}/>    
                     {/* Auth Routes */}
                     <Route path='/' element={<Home/>}/>
                    <Route path='/shop/*' element={<ShopRouter/>} />
                    <Route path="/dashboard/*" element={ <DashboardRoutes/> }/>


                </Route>
            </Routes>          
        </>
    );
};

