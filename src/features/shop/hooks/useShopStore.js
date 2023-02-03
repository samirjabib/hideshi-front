import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen, incrementCount } from "../stores";

export const useShopStore = () => {

    
    const notify = (mssg, toastId) => {
        

 
    }

    const {cartTotalQuantity, cartItems, isCartOpen} = useSelector( (state)  => state.shop)

    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
        dispatch(setCartOpen(!isCartOpen))
    }

    const onHandleIncrementCount = (item) => {
        dispatch(incrementCount(item));
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
        if(item.quantity === 1){
            console.log('removido')
        }
    }

    const onSetCartOpen = (payload) => {
        dispatch(setCartOpen(payload))
    }


    const getCartTotal = () => {

    }


    return{
        cartItems,
        isCartOpen,

        //Methods
        onHandleAddToCart,
        onHandleIncrementCount,
        onHandleDecrementItemInCart,
        onSetCartOpen
    }


}