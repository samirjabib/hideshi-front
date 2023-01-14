import { useForm } from "../../../hooks"
import { InputCrud } from "./InputCrud"


const crudFormFields = {
    title:'',
    category:'',
    details:'',
    price:null,
}

export const FormCrud = () => {

    const { 
        onInputChange, 
        isFormValid, 
        formState, 
        onResetForm,
        title,
        category,
        details,
        price,
    } = useForm( crudFormFields );

    return(
        <form className="p-6 w-full">
            <InputCrud

                placeholder='Product Name' 
                name={title}
                label=''
                onInputChange={onInputChange}
            />
            <InputCrud 
                placeholder='' 
                name=''
                onInputChange={onInputChange}

            />
            <InputCrud 
                placeholder='' 
                name=''
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
                    onInputChange={onInputChange}
                    >
                </textarea>
            </div>
        </form>
    )
}