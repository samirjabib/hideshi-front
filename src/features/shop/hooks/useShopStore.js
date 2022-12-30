import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../stores";

export const useShopStore = () => {

    const {cartTotalQuantity, cartItems} = useSelector( (state)  => state.shop)

    console.log(cartItems)



    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    }


    return{
        onHandleAddToCart
    }


}