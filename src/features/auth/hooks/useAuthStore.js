import { useDispatch, useSelector } from "react-redux"

import { onLogout, onChecking, onLogin, clearErrorMessage} from "../stores"
import { hideshiApi } from '../../../api';


export const useAuthStore = () => {

    const { status, user, errorMesage } = useSelector( state => state.auth)
    
    console.log(user)
    
    //Admin1@gmail.com // 4321admin

    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {
        dispatch(onChecking());
        try{
            const { data } = await hideshiApi.post('/auth/login', {email, password});
            console.log(data)
            const { user, token} = data;
            localStorage.setItem('token', token)
            console.log('token')
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({
                firstName: user.firstName,
                lastName:user.lastName,
                email:user.email,
                role:user.role,
            }))
        } catch(err) {
            console.log(err)
            dispatch(onLogout('incorrect password'))
            setTimeout( () => {
                dispatch(clearErrorMessage());
            }, 10)
        }

    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }



    return{
        user,
        status,

        //Methods
        startLogin,
        startLogout,
    }
}