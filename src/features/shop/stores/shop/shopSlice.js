import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    cartTotal:{
        quantity:null,
        price:null
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
            const existingItem = state.cartItems.findIndex( 
                item => item.id === payload.id
            );


            if(existingItem >= 0){
                state.cartItems[existingItem] = { 
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1   
            }
            } else {
                let item = { ...payload, quantity:1}
                state.cartItems.push(item)
                state.isCartOpen = payload.isCartOpen
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
            } else if( state.cartItems[existingItem].quantity === 1){
                const cartItemsFiltered = state.cartItems.filter(
                    (item) => item.id !== payload.id
                )

                state.cartItems = cartItemsFiltered;
                console.log('item elminado')
            }
        },
        cartTotal: (state, { payload }) => {
            state.cartTotal.quantity = payload,
            state.cartTotal.price = payload
        }
    }
});


export const {
    addItemToCart,
    decreaseCount,
    setCartOpen,
    incrementCount,
} = shopSlice.actions


