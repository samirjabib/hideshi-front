import React from "react"
import { lazily } from "react-lazily"
import { Routes, Route } from "react-router-dom"
import { ShopPage } from "../pages"

const { Checkout, ProductDetailPage } = lazily(
    () =>  import("../pages") 
)

export const ShopRouter = () => {
    return(
        <div className="mt-20">
            <Routes>       
                <Route path="/" element={<ShopPage/>}/>
                <Route path="/:id" element={
                    <React.Suspense fallback={<div>Loading{console.log('cargando product-details')}</div>}>
                        <ProductDetailPage/>
                    </React.Suspense>
                }/>
                <Route path="/checkout" element={
                    <React.Suspense fallback={<div>Loading{console.log('cargando checkout')}</div>}>
                        <Checkout/>
                    </React.Suspense>
                }/>
            </Routes>
        </div>

    )
}


