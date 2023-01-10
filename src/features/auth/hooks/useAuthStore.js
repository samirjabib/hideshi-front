import { useDispatch, useSelector } from "react-redux"

import { onLogout, onChecking, onLogin, clearErrorMessage } from "../stores"
import { hideshiApi } from '../../../api';


export const useAuthStore = () => {

    const { status, user, errorMesage } = useSelector( state => state.auth)
    
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {

        try{
            const { data } = await hideshiApi.post('auth/login', {email, password});
            const { token, user } = data
            localStorage.setItem('token', token);
            localStorage.setItem('token-init-date', new Date.getTime());
            dispatch(onLogin({
                email, 
                password, 
                id:user.id, 
                firstName:user.firstName, 
                lastName:user.lastName
            }))
        } catch(err) {
            console.log(err)
        }
    }




    return{

        //Methods
        startLogin,
    }
}