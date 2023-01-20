import React from "react"
import { Routes, Route } from "react-router-dom"
import { Checkout, ProductDetailPage, ShopPage } from "../pages"

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


