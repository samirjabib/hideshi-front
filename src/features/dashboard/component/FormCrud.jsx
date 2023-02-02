import { useForm } from "../../../hooks"
import { InputCrud } from "./InputCrud"
import { UploadPicture } from "./UploadPicture";
import { DropDown} from './DropDown'
import { useCategorySelected, useProductsStore } from "..";
import { useUploadFile } from "../hooks/useUploadFile";

import { ToastContainer } from "react-toastify"


const crudFormFields = {
    name:'',
    details:'',
    price:null,
    quantity:null,
    productImg:null
}

export const FormCrud = () => {
    const { isSelected , setIsSelected, listCategories } = useCategorySelected();
    const { addProduct, notify } = useProductsStore()

    const { 
        //Propierties
        name,
        details,
        price,
        quantity,
        isFormValid, 
        formState,

        //Methods
        onInputChange,
        onResetForm,
       
    } = useForm( crudFormFields );

    const {
        files, 
        onFileInputChange,
        onResetFiles
    } = useUploadFile()

    const categoryId = isSelected
    const priceNumber = parseFloat(price)
    const quantityNumber = parseInt(quantity)
    

    console.log(formState)


    const formData = new FormData()

    formData.append('name', name)
    formData.append('price', priceNumber)
    formData.append('quantity',quantityNumber)
    formData.append('details', details)
    formData.append('productImg', files)
    formData.append('categoryId', categoryId)

    console.log(formData)

    const onSubmit = (event) => {
        event.preventDefault();
        addProduct(formData);
        onResetForm()
        onResetFiles()
    }

    return(
        <>
            <ToastContainer/>
            <UploadPicture onFileInputChange={onFileInputChange} filesImg={files}/>
            <form 
                className="p-6 w-full"
                method="POST"
                encType="multipart/form-data"
                onSubmit={onSubmit}
            >
                <InputCrud
                    placeholder='Insert name' 
                    name='name'
                    label='Product Name'
                    type='text'
                    value={name}
                    onInputChange={onInputChange}
                />
                <div className="grid grid-cols-1 md:grid-cols-4 mb-6 md:mb-8">
                    <label htmlFor="">Category</label>
                    <DropDown 
                        formCrud={true} 
                        setIsSelected={setIsSelected} 
                        listCategories={listCategories}
                        isSelected={isSelected}
                    />
                </div>
                <InputCrud 
                    placeholder='Insert price' 
                    name='price'
                    label='Price'
                    type='number'
                    value={price}
                    onInputChange={onInputChange}
                />
                 <InputCrud 
                    placeholder='Insert quantity' 
                    name='quantity'
                    label='Quantiy'
                    type='number'
                    value={quantity}
                    onInputChange={onInputChange}
                />
                <div 
                    className="grid grid-cols-1 md:grid-cols-4 mb-6 md:mb-8 w-full"
                >    
                    <label 
                        className="block mb-2 text-sm text-bg_dark_primary">Details</label>
                    <textarea 
                        rows="4" 
                        className="block p-2.5 w-full text-sm col-span-3 text-gray-900 rounded-lg bg-[#f4f5f7] outline-none" 
                        placeholder="Write details here..."
                        name="details"
                        value={details}
                        onChange={onInputChange}
                        >
                    </textarea>
                </div>

                <div className="flex flex-col w-full justify-center p-6 md:flex-row items-center gap-4 relative bottom-10 md:ml-20">
                    <button 
                        className=" bg-bg_dark_primary py-2.5 text-bg_light_primary text-sm w-full md:w-56 border border-black"
                        type="submit"
                    >
                        Add Product
                    </button>
                    <button 
                        className="border border-black text-sm  py-2.5 w-full md:w-56 transition-all duration-150 text-black hover:bg-red-500 hover:text-white"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    )
}