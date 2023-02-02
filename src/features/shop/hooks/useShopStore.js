import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addItemToCart, decreaseCount, setCartOpen, incrementCount } from "../stores";

export const useShopStore = () => {

    
    const notify = (mssg, toastId) => {
        
        if(toastId === true)
        toast.success(mssg, {
            autoClose:3000,
            position:toast.POSITION.BOTTOM_RIGHT,
            toastId:toastId,
        },)
        if(toastId === false){
            toast.error(mssg,{
                autoClose:3000,
                position:toast.POSITION.BOTTOM_RIGHT,
                toastId:toastId,
            })
        }
 
    }

    const {cartTotalQuantity, cartItems, isCartOpen} = useSelector( (state)  => state.shop)



    const dispatch = useDispatch();

    const onHandleAddToCart = (item) => {
        dispatch(addItemToCart(item));
        dispatch(setCartOpen(!isCartOpen))
        notify('Producto Añadido a la bolsa', true)

    }

    const onHandleIncrementCount = (item) => {
        dispatch(incrementCount(item));
    }

    const onHandleDecrementItemInCart = (item) => {
        dispatch(decreaseCount(item))
        if(item.quantity === 1){
            notify('Producto removido de la bolsa', false)
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