import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, onAddProduct, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";
import { useEffect, useState } from "react";

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )
    

    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }


    const addProduct = async(productData) => {
    
        dispatch(checkingStatus())
        try{
            const { data } = hideshiApi.post('/product', productData)
            console.log(data)
        }catch(error){
            console.log(error)
        }
 
    }


    return {
        //Propierties
        products,
        isOpenProduct,
        
        setProductModal,
        addProduct,
        
    }
}