import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";
import hideshiApiFormData from "../../../api/hideshiApiFormData";
import { useEffect } from "react";
import { toast } from "react-toastify";


export const useProductsStore = () => {


    const notify = (mssg) => {
        
        
  
 
    }


    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )

    const getProducts = async() => {
        const { data } = await hideshiApi.get('/product') 
    }

    useEffect( () => {
        getProducts()
    }, [] )
  




    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }

    const addProduct = async (productData) => {
        console.log(productData)
        dispatch(checkingStatus())
        notify()
        try{
            const { data } = await hideshiApiFormData.post('/product', productData)
            if(data){
                dispatch(openProductModal(!isOpenProduct))
                toast.success('producto añadido correctamente' )
            }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
 
    }

    const removeProduct = async (id) => {
        dispatch(checkingStatus())
        notify()
        try{
            const { data } = await hideshiApiFormData.post('/product/id', id )
            if(data){
                dispatch(openProductModal(!isOpenProduct))
                notify('producto añadido correctamente', true )
            }
        }catch(error){
            notify('producto añadido correctamente', true )
        }
 
    }

    return {
        //Propierties
        products,
        isOpenProduct,
        notify,
        
        setProductModal,
        addProduct,
        
    }
}