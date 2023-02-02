import { useDispatch, useSelector } from "react-redux"
import { checkingStatus, onAddProduct, openProductModal } from "../stores";
import { hideshiApi } from "../../../api";
import hideshiApiFormData from "../../../api/hideshiApiFormData";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const useProductsStore = () => {

    const notify = () => {
        toast("default notification!",{
            position:toast.POSITION.BOTTOM_RIGHT
        })
    }


    const dispatch = useDispatch();

    const { products, isOpenProduct, isLoading } = useSelector( state => state.products )
    

    const setProductModal = (payload) => {
        dispatch(openProductModal(payload))
    }


   

    const addProduct = async (productData) => {
        console.log(productData)
        dispatch(checkingStatus())
        notify()
        try{
            const { data } = await hideshiApiFormData.post('/product', productData)
            console.log(data)
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