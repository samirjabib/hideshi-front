import React from "react"
import { lazily } from "react-lazily"
import { Routes, Route } from "react-router-dom"
import { Loading } from "../../../components"

const { Checkout, ProductDetailPage, ShopPage } = lazily(
    () =>  import("../pages") 
)

export const ShopRouter = () => {
    return(

       <div className="mt-20"> 
                <Routes>       
                    <Route 
                        path="/" 
                        element={<ShopPage/>}
                    />
                    <Route 
                        path="/:id" 
                        element={
                            <ProductDetailPage
                        />
                    }/>
                    <Route 
                        path="/checkout" 
                        element={<Checkout/>}
                    />
                </Routes>
         </div> 


    )
}


