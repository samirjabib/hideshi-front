import { Input } from "../../auth/components"
import { DropDown } from "../component"

export const StateProducts = () => {
    return(
        <div className="w-full  ">
            <h2 className="text-lg font-semibold">Products</h2>
            <div>
                <form className="w-full rounded-md p-4 bg-bg_light_primary mt-6">
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

                    <div>

                    </div>
                    
                </form>
            </div>
           
        </div>
    )
}