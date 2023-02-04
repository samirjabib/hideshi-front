import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, decreaseCount, setCartOpen, incrementCount, getCartTotal } from "../stores";

export const useShopStore = () => {

    
    const { cartItems, isCartOpen, totalPrice, totalQuantity} = useSelector( (state)  => state.shop)


    const dispatch = useDispatch();

    
    const totalInCart = () => {
        const total = cartItems.reduce( (cartTotal, cartItem) => {
            const { price, quantity} = cartItem
            const itemTotal = price * quantity
            cartTotal.totalPrice += itemTotal
            cartTotal.totalQuantity += quantity
            return cartTotal
        },{
            totalPrice:0,
            totalQuantity:0
        })

        let totalPrice = total.totalPrice
        let totalQuantity = total.totalQuantity

        dispatch(getCartTotal({
            totalPrice,
            totalQuantity
        }))
        
    } 


   


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
        }
    }

    const onSetCartOpen = (payload) => {
        dispatch(setCartOpen(payload))
    }


    return{
        cartItems,
        isCartOpen,
        totalPrice,
        totalQuantity,

        //Methods
        onHandleAddToCart,
        onHandleIncrementCount,
        onHandleDecrementItemInCart,
        onSetCartOpen,
        totalInCart
    }


}