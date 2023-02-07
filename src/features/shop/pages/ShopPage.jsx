import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import { ErrorFallback, Loading } from "../../../components";

import { useProductsStore } from "../../dashboard";
import { ProductsList } from "../components";



export const ShopPage = () => {

const navigate = useNavigate()
   const { products, getProducts } = useProductsStore();

   useEffect( () => {
        getProducts()
   },[])

    return(
        <div className=" w-full">
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate('/')}
            >
                    <ProductsList products ={products}/>
            </ErrorBoundary>
        </div>
    )
}