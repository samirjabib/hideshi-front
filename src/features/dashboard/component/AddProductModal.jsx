import { useEffect } from "react"
import { useRef } from "react"
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
        transition-all duration-300 flex-col flex p-4
        ${isOpenProduct ? 'left-0': 'left-[-100%]'} `}
        ref={productModalRef}
        >
  
        <AiOutlineClose 
                    className={` absolute right-0 font-bold cursor-pointer mt-[1rem] mr-4`} 
                    onClick={ () => setProductModal(false) }
                    size={22}
        />
    
        </div>
    )
}