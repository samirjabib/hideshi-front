
import { AiOutlineClose } from "react-icons/ai"


export const HeaderProductModal= ({setProductModal}) => {
    return(
        <div className="bg-[#f4f5f7] p-6 border-b">
            <div className="border shadow-lg w-10 h-10 absolute right-0 flex items-center justify-center mr-4 rounded-full transition-all duration-150 hover:bg-black/10 ">
                    <AiOutlineClose 
                                className={`font-bold cursor-pointer`} 
                                onClick={ () => setProductModal(false) }
                                size={16}
                                color='gray'
                    />
                </div>
                
            <div className="">
                <h2 className="text-lg font-medium">
                    Add Product
                </h2>
                <p className="text-sm mt-2 w-52 md:w-[70%]">
                    Add your product and necessary information from here
                </p>
            </div>
        </div>
    )
}