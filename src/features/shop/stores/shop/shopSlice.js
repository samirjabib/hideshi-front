import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems:[],
    cartTotal:{
        productsInCart:null,
        totalPrice:null
    },
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
            console.log(payload)
            console.log(state.cartItems)
            const existingItem = state.cartItems.findIndex( 
                item => item.id === payload.id
            );
            
            if(existingItem >= 0){
                state.cartItems[existingItem] = { 
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1
                }
                toast.success("Cantidad ncrementada")

            } else {
                let item = { ...payload, quantity:1}
                state.cartItems.push(item)
                state.isCartOpen = payload.isCartOpen

                toast.success("Product added to cart");
            }
        },
    
        incrementCount : ( state, { payload } ) => {
            const existingItem = state.cartItems.findIndex( 
            item => item.id === payload.id
            );

            if(existingItem >= 0){
                state.cartItems[existingItem] = { 
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1   
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
        cartTotal: (state, { payload }) => {
            state.cartTotal.totalPrice = payload.totalPrice
            state.cartTotal.productsInCart = payload.productsInCart
        }
    }
});


export const {
    addItemToCart,
    decreaseCount,
    setCartOpen,
    incrementCount,
    cartTotal
} = shopSlice.actions


