import React from "react"
import { lazily } from "react-lazily"
import { Routes, Route } from "react-router-dom"
import { ShopPage } from "../pages"
import { Loading } from "../../../components"

const { Checkout, ProductDetailPage } = lazily(
    () =>  import("../pages") 
)

export const ShopRouter = () => {
    return(
        <div className="mt-20">
            <Routes>       
                <Route path="/" element={<ShopPage/>}/>
                <Route path="/:id" element={
                    <React.Suspense fallback={<Loading/>}>
                        <ProductDetailPage/>
                    </React.Suspense>
                }/>
                <Route path="/checkout" element={
                    <React.Suspense fallback={<Loading/>}>
                        <Checkout/>
                    </React.Suspense>
                }/>
            </Routes>
        </div>

    )
}


