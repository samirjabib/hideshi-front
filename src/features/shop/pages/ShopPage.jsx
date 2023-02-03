import { useEffect, useState, Suspense } from "react";
import { lazily } from "react-lazily";
import { Loading } from "../../../components";

import { useProductsStore } from "../../dashboard";
import { ProductsList } from "../components";



export const ShopPage = () => {

   const { products } = useProductsStore();

    return(
        <div className=" w-full">
                <ProductsList products ={products}/>
        </div>
    )
}