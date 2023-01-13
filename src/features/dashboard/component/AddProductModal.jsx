import { useEffect } from "react"
import { useRef } from "react"
import { FormCrud } from "./FormCrud"
import { HeaderProductModal } from "./HeaderProductModal"
import { UploadPicture } from "./UploadPicture"

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
            <HeaderProductModal setProductModal={setProductModal}/>
            <UploadPicture/>
            <FormCrud/>
        </div>
    )
}