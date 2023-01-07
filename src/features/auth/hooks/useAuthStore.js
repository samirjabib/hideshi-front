import { useDispatch, useSelector } from "react-redux"
import { onLogout, onChecking, onLogin, clearErrorMessage} from "../stores"

export const useAuthStore = () => {

    const { status, user, errorMesage } = useSelector( state => state.auth)
    



    return{

    }
}