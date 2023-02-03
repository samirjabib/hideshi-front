import { useEffect, useState, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { lazily } from "react-lazily";
import { useNavigate } from "react-router-dom";
import { ErrorFallback, Loading } from "../../../components";

import { useProductsStore } from "../../dashboard";
import { ProductsList } from "../components";



export const ShopPage = () => {

const navigate = useNavigate()
   const { products } = useProductsStore();

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