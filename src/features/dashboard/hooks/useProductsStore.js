import { useDispatch, useSelector } from "react-redux"

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products } = useSelector( state => state.products )




    const startLoadingProducts = async() => {
        console.log('product has been changed')
    }


    return {
        //Propierties
        products,

        //Methods

        startLoadingProducts,
    }


}