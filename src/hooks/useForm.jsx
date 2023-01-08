import { useEffect, useState, useMemo } from "react"



export const useForm = (initialForm = {}, formValidations = {}) => {
    const [ formState, setFormState ] = useState(initialForm)
    const [ formValidation, setFormValidation ] = useState({});

    console.log(formState)


    useEffect( () => {
        setFormState(initialForm)
    },[])

    const onInputChange = ({target}) => {
        const { name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    };

    return{
        formState,
        ...formState,

        onInputChange
    }
}