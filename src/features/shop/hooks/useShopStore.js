import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen } from "../stores";

export const useShopStore = () => {

    const {cartTotalQuantity, cartItems, isCartOpen} = useSelector( (state)  => state.shop)



    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
        dispatch(setCartOpen(!isCartOpen))
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
    }

    const onSetCartOpen = (payload) => {
        dispatch(setCartOpen(payload))
    }


    return{
        cartItems,
        isCartOpen,

        //Methods
        onHandleAddToCart,
        onHandleDecrementItemInCart,
        onSetCartOpen
    }


}