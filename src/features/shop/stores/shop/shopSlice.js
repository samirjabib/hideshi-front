import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems:[],
    cartTotalQuantity:0,
    cartTotalAmout:0,
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
                state.cartItems.push(item)
                console.log('item subido')
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
    }
});


export const {
    addItemToCart,
    decreaseCount,
    setCartOpen,
} = shopSlice.actions


