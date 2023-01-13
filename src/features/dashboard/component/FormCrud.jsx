import { InputCrud } from "./InputCrud"
import { useForm } from "../../../hooks"


const crudFormFields = {
    title:'',
    category:'',
    specifications:'',
    price:null,
}

export const FormCrud = () => {

    const { formState, title, category, specifications, price, onInputChange, onResetForm} = useForm(crudFormFields);

    console.log(formState)

    return(
        <form className="border-2 border-black p-6">
            <InputCrud 
                placeholder='Product Title' 
                value={title} 
                name='title' 
                label='Product Title'
                onInputChange={onInputChange}
                />
            <InputCrud 
                placeholder='Category' 
                value={category} 
                name='category' 
                label='Category'
                onInputChange={onInputChange}
                />
            <InputCrud 
                placeholder='Specifications' 
                value={specifications} 
                name='specifications' 
                label='Specifications'
                onInputChange={onInputChange}
                />
            <InputCrud 
                placeholder='Price' 
                value={price} 
                name='price' 
                label='Price'
                onInputChange={onInputChange}
                />
        </form>
    )
}