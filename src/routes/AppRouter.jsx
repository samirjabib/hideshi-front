import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import {  useAuthStore } from "../features";
import { Loading } from "../components";

const { AuthRoutes, Home, ShopRouter, DashboardRoutes } = lazily(
    () =>  import("../features") 
)


const auth = {
    user:{
        id:2, 
        user:'bamba', 
        role:'user'
    },
    status:'not-authenticated',
    
}

//Import animation package
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { lazily } from "react-lazily";




export const AppRouter = () => {

    const { status, user} = useAuthStore()

    const auth = {
        ...user,
        status
    }



    useEffect( () => {
        Aos.init({
          duration:1800,
          offset:100,
          disable:'mobile',
        });
      },[]);
    
    return (
        <>
            <React.Suspense fallback={<Loading/>}>
                <Routes>
                    <Route path='/' element={<Layout auth={auth}/>}>
                        {
                            (status === "not-authenticated")
                            ? 
                                <>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/auth/*' element={
                                        <React.Suspense fallback={<Loading/>}>
                                            <AuthRoutes/>
                                        </React.Suspense>
                                    }/>
                                    <Route path='/shop/*' element={
                                        <React.Suspense fallback={<Loading/>}>
                                            <ShopRouter/>
                                        </React.Suspense>
                                    } />
                                    <Route path='/*' element={ <Navigate to='/'/>}/>
                                </>
                            :
                                <>
                                    <Route path='/' element={<Home/>}/>
                                    <Route path='/shop/*' element={
                                        <React.Suspense fallback={<Loading/>}>
                                            <ShopRouter/>
                                        </React.Suspense>
                                    } />
                                    <Route path="/dashboard/*" element={ 
                                        <React.Suspense fallback={<Loading/>}>
                                            <DashboardRoutes role={auth.role}/>
                                        </React.Suspense> 
                                    }/>
                                    <Route path='/*' element={ <Navigate to='/'/>}/>
                                </>
                        }
                    </Route>
                </Routes>     
            </React.Suspense>     
        </>
    );
};

