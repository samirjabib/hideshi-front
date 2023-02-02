import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, onAddProduct, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";
import hideshiApiFormData from "../../../api/hideshiApiFormData";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useShopStore } from "../..";



export const useProductsStore = () => {


    const notify = (mssg, toastId) => {
        
        if(toastId === true)
        toast.success(mssg, {
            autoClose:3000,
            position:toast.POSITION.BOTTOM_RIGHT,
            toastId:toastId,
        },)
        if(toastId === false){
            toast.error(mssg,{
                autoClose:3000,
                position:toast.POSITION.BOTTOM_RIGHT,
                toastId:toastId,
            })
        }
 
    }


    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )

    console.log(isOpenProduct)
    

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
                notify('producto añadido correctamente', true )
            }
        }catch(error){
            console.log(error)
            notify(error.message, true )
        }
 
    }

    const removeProduct = async (id) => {
        dispatch(checkingStatus())
        notify()
        try{
            const { data } = await hideshiApiFormData.post('/product/id', id )
            if(data){
                dispatch(openProductModal(!isOpenProduct))
                notify.success
            }
        }catch(error){
            console.log(error)
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