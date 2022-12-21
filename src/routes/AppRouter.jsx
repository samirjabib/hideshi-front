import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { AuthRoutes, Home, ShopRouter } from "../features";

const auth = {
    uid:1,
    name:'samir jabib',
    email:'samirdev9669@gmail.com',
    status:'auth',
    rol:'admin'
}



export const AppRouter = () => {
    return (
        <>

            <Routes>
                <Route path='/' element={<Layout auth={auth}/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/*' element={ <AuthRoutes/>}/>
                    <Route path='/shop/*' element={<ShopRouter/>} />
                </Route>
            </Routes>

              
        </>
    );
};

