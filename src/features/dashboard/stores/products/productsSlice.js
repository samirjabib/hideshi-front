import { createSlice } from "@reduxjs/toolkit";
import { dummieData } from "../../../shop";


export const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        products:null,
        isOpenProduct:false,
        categories:[]
    },
    reducers:{
        checkingStatus : (state, {payload}) => {
            state.isLoading = false
        },
        openProductModal: (state, { payload }) => {
            state.isOpenProduct = payload;
        },
        onAddProduct: (state, { payload }) => {
            console.log(payload, 'payload on the reducer')
            state.isLoading = false
            state.products.push(payload)
        },
        fetchProducts: (state, { payload } ) => {
            console.log('product in slice')
            state.products = payload
        }
    }
});



export const { 
    openProductModal, 
    onLoadingProducts,  
    checkingStatus, 
    onAddProduct,
    fetchProducts
} = productSlice.actions;


