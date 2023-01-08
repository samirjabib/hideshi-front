import { useDispatch, useSelector } from "react-redux"

export const useProductsStore = () => {

    const dispatch = useDispatch();

    const { products } = useSelector( state => state.products )


    return {
        //Propierties
        products,



    }


}