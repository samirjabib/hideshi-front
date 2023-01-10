import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartIsOpen  } from "../stores";

export const useShopStore = () => {

    const {cartTotalQuantity, cartItems, isCartOpen } = useSelector( (state)  => state.shop)
    console.log(isCartOpen,'console.log in the payload')


    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
    }

    const onHandleBag = () => {
        dispatch(setCartIsOpen(!isCartOpen))
    }



    return{
        cartItems,
        isCartOpen,

        //Methods
        onHandleAddToCart,
        onHandleDecrementItemInCart,
        onHandleBag,
    }


}