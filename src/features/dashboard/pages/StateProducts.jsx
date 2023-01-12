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

                <table className="w-full border rounded-md mt-4 table-auto " >
                        <thead className="">
                            <tr className="flex rounded-md h-12 items-center justify-around text-center p-2">
                                <th className="w-24">Name</th>
                                <th className="w-24">Category</th>
                                <th className="w-24">Price</th>
                                <th className="w-24">Img</th>
                            </tr>
                        </thead>
                        <tbody
                            className="bg-bg_light_primary"
                        >
                            {products.map( ({id, img, name, price}) => {
                                const category = 't-shirt'
                                return(
                                    <tr key={id} className='flex flex-row justify-around items-center border text-center p-2'>
                                        <td className="w-24">{name}</td>
                                        <td className="w-24">{category}</td>
                                        <td className="w-24">COP {price}</td>
                                        <img 
                                            src={img} 
                                            alt='img'
                                            className=" h-20 w-20"
                                        />
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