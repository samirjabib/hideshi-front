import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen, incrementCount, cartTotal } from "../stores";

export const useShopStore = () => {

    
    const notify = (mssg, toastId) => {
        
    }

    const {cartTotal, cartItems, isCartOpen} = useSelector( (state)  => state.shop)

    console.log(cartTotal)

    const getTotalCart = () => {
        let { totalPrice, productsInCart } = cartTotal
    }

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