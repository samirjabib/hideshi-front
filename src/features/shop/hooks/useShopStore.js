import { useEffect } from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen, incrementCount, getCartTotal } from "../stores";

export const useShopStore = () => {

    
    const { cartItems, isCartOpen} = useSelector( (state)  => state.shop)



    const dispatch = useDispatch();

   
    useEffect( () => {
        dispatch(getCartTotal())
    }, [cartItems])



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