import { useForm } from "../../../hooks"
import { InputCrud } from "./InputCrud"


const crudFormFields = {
    title:'',
    category:'',
    specifications:'',
    price:null,
}

export const FormCrud = () => {

    return(
        <form className="p-6 w-full">
            <InputCrud/>
            <InputCrud/>
            <InputCrud/>
        </form>
    )
}