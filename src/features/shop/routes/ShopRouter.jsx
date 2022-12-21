import { Routes, Route } from "react-router-dom"
import { ProductDetailPage, ShopPage } from "../pages"

export const ShopRouter = () => {
    return(
        <div className="mt-20">
            <Routes>       
                <Route path="/" element={<ShopPage/>}/>
                <Route path="/:id" element={<ProductDetailPage/>}/>
            </Routes>
        </div>

    )
}


