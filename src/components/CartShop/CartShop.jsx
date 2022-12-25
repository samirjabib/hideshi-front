import { useProductsStore } from "../../features"
import { ListProducts } from "./ListProducts"

export const CartShop = () => {

    const { products }=useProductsStore()
    
    return(
        <div className="border-2 border-black ">
            <ListProducts products = { products }/>
        </div>
    )
}