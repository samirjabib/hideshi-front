import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount } from "../stores";

export const useShopStore = () => {

    const {cartTotalQuantity, cartItems} = useSelector( (state)  => state.shop)




    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
    }


    return{
        cartItems,

        //Methods
        onHandleAddToCart,
        onHandleDecrementItemInCart
    }


}