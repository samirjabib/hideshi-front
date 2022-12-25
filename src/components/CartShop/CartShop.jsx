import { useProductsStore } from "../../features"
import { ListProducts } from "./ListProducts"

export const CartShop = () => {

    const { products }=useProductsStore()
    
    return(
        <div className="">
            <ListProducts products = { products }/>
        </div>
    )
}