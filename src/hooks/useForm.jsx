import { useEffect } from 'react';
import { useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => { 

    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    const onInputChange = ({ target }) => { 
        const { name, value } = target; 
        setFormState({ 
            ...formState, 
            [ name ]: value 
        });
    }

    useEffect( () => {
        createValidations();
    }, []);

    useEffect( () => {
        createValidations();
    });

    const onResetForm = () => {
        setFormState( initialForm ); 
    };


    const createValidations = () => {
        const formCheckedValues = {};

        for(const formField of Object.keys( formValidations )){
            const [ fn, errorMessage ] = formValidation[formField];
            

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        };
        setFormState( formCheckedValues);
    };

    return {
        //Propierties

        formState,
        ...formState,  

        //Methods
        onInputChange, 
        onResetForm, 
    }
}