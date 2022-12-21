import { useSelector, useDispatch } from "react-redux";

export const useShopStore = () => {

    const dispatch = useDispatch();
    const { products } = useSelector( state => state.products )
    
    

    return{

    }
}

