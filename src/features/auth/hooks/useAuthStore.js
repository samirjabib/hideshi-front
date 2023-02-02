import { useDispatch, useSelector } from "react-redux"

import { onLogout, onChecking, onLogin, clearErrorMessage} from "../stores"
import { hideshiApi } from '../../../api';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const useAuthStore = () => {

    const { status, user, errorMesage } = useSelector( state => state.auth)

    const navigate = useNavigate()

    const notify = (mssg, toastId) => {
        
        if(toastId === true)
        toast.success(mssg, {
            autoClose:3000,
            position:toast.POSITION.BOTTOM_RIGHT,
            toastId:toastId,
        },)
        if(toastId === false){
            toast.error(mssg,{
                autoClose:3000,
                position:toast.POSITION.BOTTOM_RIGHT,
                toastId:toastId,
            })
        }
 
    }
    

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
            notify('Logeaste con exito a tu cuenta', true)
        } catch (error) {
            console.log(error)
            dispatch(onLogout('incorrect password'))
            setTimeout( () => {
                dispatch(clearErrorMessage());
            }, 10)
        }

    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
        notify('Has cerrado con exito la sesion', true)

    }



    return{
        user,
        status,

        //Methods
        startLogin,
        startLogout,
    }
}