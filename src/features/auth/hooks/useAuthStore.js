import { useDispatch, useSelector } from "react-redux"

import { onLogout, onChecking, onLogin, clearErrorMessage} from "../stores"
import { hideshiApi } from '../../../api';


export const useAuthStore = () => {

    const { status, user, errorMesage } = useSelector( state => state.auth)
    
    const dispatch = useDispatch();

    const startLogin = async({ email, password }) => {

        try{
            const { data } = await hideshiApi.post('/auth/login', {email, password});
            console.log(data)
        } catch(err) {
            console.log(err)
        }

        console.log(data);
    }



    return{

        //Methods
        startLogin,
    }
}