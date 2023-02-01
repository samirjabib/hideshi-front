import React from "react";
import { lazily } from "react-lazily";
import { Route, Routes } from "react-router-dom";
import { Loading } from "../../../components";

const { Login, Register } = lazily(
    () =>  import("../pages") 
)


export const AuthRoutes = () => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <Routes>
                <Route path = "/login" element = { <Login/>}/>
                <Route path = "/register" element = { <Register/>}/>
            </Routes>
        </React.Suspense>
    );
};
