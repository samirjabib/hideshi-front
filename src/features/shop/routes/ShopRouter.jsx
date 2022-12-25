import { Routes, Route } from "react-router-dom"
import { Checkout, ProductDetailPage, ShopPage } from "../pages"

export const ShopRouter = () => {
    return(
        <div className="mt-20">
            <Routes>       
                <Route path="/" element={<ShopPage/>}/>
                <Route path="/:id" element={<ProductDetailPage/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </div>

    )
}


