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
        <form className="border-2 borderck-bla p-6 w-full">
            <InputCrud/>
            <InputCrud/>
            <InputCrud/>
        </form>
    )
}