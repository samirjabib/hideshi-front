import { Input } from "../../auth/components"
import { DropDown, ListProductTables } from "../component"
import { useProductsStore } from "../hooks"

export const StateProducts = () => {

    const { products } = useProductsStore()

    return(
        <div className="w-full container mx-auto max-w-5xl ">
            <h2 className="text-lg font-semibold">Products</h2>
            <div className="">
                <form className="w-full rounded-md p-8 bg-bg_light_primary mt-6">
                    <div className="">
                        <Input 
                            styles={'bg-[#f4f5f7] p-2.5 rounded-md mb-4'} 
                            placeholder='Search product by name'    
                        />
                        <DropDown/>
                        <button
                            className="bg-bg_dark_primary text-bg_light_primary w-full p-2.5 rounded-md mt-4"
                        >
                            Add Product
                        </button>
                    </div>
                </form>

                <ListProductTables products={products}/>

            </div>
           
        </div>
    )
}