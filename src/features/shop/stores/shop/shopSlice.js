import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems:[],
    totalQuantity: 0,
    totalPrice: 0,
    isCartOpen:false,
};

export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        setCartOpen: (state, {payload}) => {
            state.isCartOpen = payload;
        },
        addItemToCart: ( state, { payload }) => {

            const existingItem = state.cartItems.findIndex( 
                item => item.id === payload.id
            );
            
            if(existingItem >= 0){
                state.cartItems[existingItem] = { 
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1,
                    total: parseFloat(state.cartItems[existingItem].price) * state.cartItems[existingItem].quantity 
                }
                toast.success("Cantidad incrementada")

            } else {
                let item = { 
                    ...payload, 
                    quantity:1,
                }
                state.cartItems.push(item)
                state.isCartOpen = payload.isCartOpen
                toast.success("Producto añadido a la bolsa");
            }
        },
    
        incrementCount : ( state, { payload } ) => {
            const existingItem = state.cartItems.findIndex( 
            item => item.id === payload.id
            );

            if(existingItem >= 0){
                state.cartItems[existingItem] = { 
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1,
                    total: parseFloat(state.cartItems[existingItem].price) * state.cartItems[existingItem].quantity 
                }
            } 
            toast.success("Cantidad incrementada")

        },
        decreaseCount : ( state, { payload} ) => {
            const existingItem = state.cartItems.findIndex(
                item => item.id === payload.id
            );

           
            if( state.cartItems[existingItem].quantity > 1){
                state.cartItems[existingItem] = {
                    ...state.cartItems[existingItem],
                    quantity: state.cartItems[existingItem].quantity -= 1
                }
                toast.error('Cantidad decrementada')

            } else if( state.cartItems[existingItem].quantity === 1){
                const cartItemsFiltered = state.cartItems.filter(
                    (item) => item.id !== payload.id
                )

                state.cartItems = cartItemsFiltered;
                toast.error('Producto Eliminado')
            }
        },
        getCartTotal: (state , { payload }) => {
            state.totalPrice = payload.totalPrice
            state.totalQuantity = payload.totalQuantity
        },
    }
});


export const {
    addItemToCart,
    decreaseCount,
    setCartOpen,
    incrementCount,
    getCartTotal
} = shopSlice.actions


