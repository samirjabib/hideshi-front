import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isCartOpen:false,
    cart:[],
    items:[],
};

export const shopSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        setCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        },

        addToCart: ( state, { payload }) => {
            state.cart = [ ...state.cart, payload ]
        },

        removeFromCart : (state, { payload } ) => {
            state.cart = state.cart.filter( (item) => item.id !== payload.id)
        },


        increaseCount: ( state, { payload }) => {
            state.cart = state.cart.map( item => {
                if(item.id === payload.id){
                    item.count++
                }
            })
        },

        decreaseCount : ( state, { payload} ) => {
            state.cart = state.cart.map( (item) => {
                if(item.id === payload.id && item.count > 1){
                    item.count--;
                }
            })
        }
    }
});


export const {
    addToCart,
    decreaseCount,
    increaseCount,
    removeFromCart,
    setCartOpen,
} = shopSlice.actions


export default shopSlice;