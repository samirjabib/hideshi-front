import { Routes, Route } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { Home } from '../home/pages';
import { ShopRouter } from '../shop';

const ROLES = {
    'User':2001,
    'Admin': 5150,
}

export const AppRouter = () => {
    return (
        <>
            <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/auth/*' element={ <AuthRoutes/>}/>
                    <Route path='/shop/*' element={<ShopRouter/>} />
            </Routes>
              
        </>
    );
};

