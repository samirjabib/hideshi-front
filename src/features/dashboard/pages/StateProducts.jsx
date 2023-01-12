import { Input } from "../../auth/components"
import { DropDown } from "../component"
import { useProductsStore } from "../hooks"

export const StateProducts = () => {

    const { products } = useProductsStore()
    console.log(products)

    return(
        <div className="w-full container mx-auto max-w-5xl">
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
                </form>

                <table className="w-full border-2 border-black mt-4 table-auto" >
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Img</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map( ({id, img, name, price}) => {
                                const category = 't-shirt'
                                return(
                                    <tr key={id}>
                                        <td>{name}</td>
                                        <td>{category}</td>
                                        <td>{price}</td>
                                        <img src={img} alt='img'/>
                                    </tr>
                                )
                            })

                            }
                        </tbody>
                </table>
            </div>
           
        </div>
    )
}