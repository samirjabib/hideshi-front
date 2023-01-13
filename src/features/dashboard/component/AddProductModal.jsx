import { useEffect } from "react"
import { useRef } from "react"
import { FormCrud } from "./FormCrud"
import { UploadPicture } from "./UploadPicture"
import { AiOutlineClose } from "react-icons/ai"


export const AddProductModal = ({setProductModal, isOpenProduct}) => {

    const productModalRef = useRef()



    useEffect( () => {
        document.addEventListener("click", handleOutSideClick, true)

        return document.removeEventListener("click", handleOutSideClick)
    }, [])


    const handleOutSideClick = ({ target }) => {
        if(!productModalRef.current?.contains(target)){
            setProductModal(false)
        }
      
    }

    return(
        <div 
        className={`fixed left-0 top-0 w-11/12  md:max-w-[42rem] h-screen overflow-scroll bg-bg_light_primary shadow-2xl  z-[999]
        transition-all duration-300 flex-col flex
        ${isOpenProduct ? 'left-0': 'left-[-100%]'} `}
        ref={productModalRef}
        >  
            {/* Header */}
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

            <UploadPicture/>

            <FormCrud/>
            <div className="flex flex-col w-full border-2 border-black justify-around p-6">
                
                <button 
                    className="py-2 bg-bg_dark_primary text-bg_light_primary"
                    
                >
                    Add Product
                </button>
                <button 
                    className="border-black border transition-all duration-150 text-red-500 hover:bg-red-500 hover:text-white px-2 py-2 mt-4"
                >
                    Cancel
                </button>
            </div>
            
        </div>
    )
}