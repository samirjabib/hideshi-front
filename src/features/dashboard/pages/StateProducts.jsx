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
                        <thead className=" ">
                            <tr className="flex border-2 justify-around border-red-500 text-center">
                                <th className="w-20 border-2 border-black">Name</th>
                                <th className="w-20 border-2 border-black">Category</th>
                                <th className="w-20 border-2 border-black">Price</th>
                                <th className="w-20 border-2 border-black">Img</th>
                            </tr>
                        </thead>
                        <tbody
                            className="bg-bg_light_primary"
                        >
                            {products.map( ({id, img, name, price}) => {
                                const category = 't-shirt'
                                return(
                                    <tr key={id} className='border-2 border-green-500 flex flex-row justify-around items-center'>
                                        <td className="border-2 border-black w-20">{name}</td>
                                        <td className="border-2 border-black w-20">{category}</td>
                                        <td className="border-2 border-black w-20">{price}</td>
                                        <img 
                                            src={img} 
                                            alt='img'
                                            className="border-2 border-black h-20 w-20"
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