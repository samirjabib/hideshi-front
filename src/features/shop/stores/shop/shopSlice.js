import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmout:0,
};

export const shopSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemToCart: ( state, { payload }) => {
            const existingItem = state.cartItems.findIndex( //Encontramos si el objeto existe por su id
                item => item.id === payload.id
            );

            if(existingItem >= 0){
                state.cartItems[existingItem] = { //Si existe le sumamos 1 a su propiedad quantity.
                    ...state.cartItems[existingItem], 
                    quantity: state.cartItems[existingItem].quantity + 1
                }
            } else {
                let item = { ...payload, quantity:1}
                state.cartItems.push(item, 'item subido')
            }
        },

        removeFromCart : (state, { payload } ) => {
            state.cartItems = state.cartItems.filter( (item) => item.id !== payload.id)
        },

        increaseCount: ( state, { payload }) => {
            state.cartItems = state.cartItems.map( item => {
                if(item.id === payload.id){
                    item.count++
                }
            })
        },

        decreaseCount : ( state, { payload} ) => {
            state.cartItems = state.cartItems.map( (item) => {
                if(item.id === payload.id && item.count > 1){
                    item.count--;
                }
            })
        }
    }
});


export const {
    addItemToCart,
    decreaseCount,
    increaseCount,
    removeFromCart,
} = shopSlice.actions


