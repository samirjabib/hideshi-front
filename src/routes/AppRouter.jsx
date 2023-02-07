//Import animation package
import Aos from "aos";
import "aos/dist/aos.css";
import { Suspense, useEffect } from "react";
import { lazily } from "react-lazily";

import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "../components";
import { useAuthStore } from "../features";
import { Loading } from "../components";
import { Home } from "../features";
import { ErrorBoundary } from "react-error-boundary";

const { AuthRoutes, ShopRouter, DashboardRoutes } = lazily(
    () =>  import("../features") 
)




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
        <ErrorBoundary>
            <Suspense
                fallback={<Loading/>}
            >
                <Routes>
                    <Route 
                        path='/' 
                        element={<Layout auth={auth}/>}
                    >
                        {
                            (status === "not-authenticated")
                            ? 
                                <>
                                    <Route 
                                        path='/' 
                                        element={<Home/>}
                                    />

                                    <Route 
                                        path='/auth/*' 
                                        element={<AuthRoutes/>
                                        }
                                    />

                                    <Route 
                                        path='/shop/*' 
                                        element={<ShopRouter/>}
                                    />

                                    <Route 
                                        path='/*' 
                                        element={ <Navigate to='/'/>}
                                    />
                                </>
                            :
                                <>
                                    <Route 
                                        path='/' 
                                        element={<Home/>}
                                    />

                                    <Route 
                                        path='/shop/*' 
                                        element={<ShopRouter/>} 
                                    />

                                    <Route 
                                        path="/dashboard/*" 
                                        element={<DashboardRoutes role={auth.role}/>}
                                    />
                                    
                                    <Route 
                                        path='/*' 
                                        element={ <Navigate  to='/'/>}
                                    />
                                </>
                        }
                    </Route>
                </Routes>     
            </Suspense>
        </ErrorBoundary>
    );
};

