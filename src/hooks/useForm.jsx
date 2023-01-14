import { useEffect, useState, useMemo } from "react"



export const useForm = (initialForm = {}, formValidations = {}) => {
    const [ formState, setFormState ] = useState(initialForm)
    const [ formValidation, setFormValidation ] = useState({});

    useEffect( () => {
        setFormState(initialForm)
    },[]);

    const createValidators = () => {
        const formCheckedValues = {};

        for (const formField of Object.keys(formValidation)){
            const [ fn, errorMessage ] = formValidation[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    };

    const onInputChange = ({target}) => {
        const { name, value} = target;

        setFormState({
            ...formState,
            [name] : value
        })
    };

    const onFileInputChange = ( {target }) => {
        if(target.files === 0) return
        const {files, name} = target
        
        const filesToUpload = [];
        for (const file of files){
            filesToUpload.push(file)
        }
        console.log(filesToUpload)
        setFormState({
            ...formState,
            [name] : filesToUpload
        })
    }


    const isFormValid = useMemo( () => {
        for(const formValue of Object.keys(formValidation)){
            if(formValidation(formValue) !== null) return false
        };
    });

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return{
        formState,
        ...formState,
        ...formValidation,
        isFormValid,

        onInputChange,
        onResetForm,
        onFileInputChange
    }
}