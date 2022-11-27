import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        page:0,
        isLoading:false,
    },
    reducers:{
        startLoadingProducts : (state) => {
            state.isLoading = true;

        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.products = action.payload.products;
        }
    }
});


export const { setProducts, startLoadingProducts } = productSlice.actions;


