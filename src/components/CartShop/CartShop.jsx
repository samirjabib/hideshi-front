import { useProductsStore } from "../../features"
import { ListProducts } from "./ListProducts"

export const CartShop = () => {

    const { products }=useProductsStore()
    
    return(
        <div className=" bg-bg_light_primary overflow-scroll h-[70%]">
            <ListProducts products = { products }/>
        </div>
    )
}