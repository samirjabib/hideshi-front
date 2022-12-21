import { useLocation, Navigate, Outlet } from "react-router-dom";


const AUTH = [
    {id:1, user:'samir', role:'user'},
    {id:1, user:'bamba', role:'admin'},
]



export const requireAuth = ( {allowedRoles } ) => {

    const location = useLocation();

    return(
        AUTH.find( role =>  allowedRoles?.includes(role)
        
        ? <Outlet/> 
        : AUTH.user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
        )
    )

}