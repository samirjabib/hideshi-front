import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen } from "../stores";

export const useShopStore = () => {

    const {cartTotalQuantity, cartItems, isCartOpen } = useSelector( (state)  => state.shop)

    console.log(isCartOpen)

    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
    }


    const onHandleOpenCart = () => {
        dispatch(setCartOpen(!isCartOpen))
    };



    return{
        cartItems,
        isCartOpen,

        //Methods
        onHandleAddToCart,
        onHandleDecrementItemInCart,
        onHandleOpenCart,
    }


}