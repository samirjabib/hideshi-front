import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCount, increaseCount, removeFromCart, setCartOpen } from "../stores";

export const useShopStore = () => {

    const dispatch = useDispatch();
    const { cart } = useSelector( state => state.cart )
    

    const onHandleCartSideBar = () => {
        setCartOpen();
    };

    const addToCart = (item) => {
        dispatch(addToCart(item));
    };

    const removeFromCart = ( id ) => {
        dispatch(removeFromCart(id))
    }
    

    return{
        //Propierties 
        cart,

        //Method
        
    }
}

