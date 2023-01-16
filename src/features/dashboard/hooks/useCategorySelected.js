import { useEffect, useState } from 'react'
import { hideshiApi } from '../../../api';



export const useCategorySelected = () => {
    const [ isSelected, setIsSelected ] = useState('Category');
    const [ listCategories, setCategories ] = useState([])

    useEffect( () => {
        hideshiApi.get('/category')
            .then( response => setCategories(response.data) )
            .catch( error => console.log(error))
    }, [])

    return{
        isSelected,
        listCategories,
        setIsSelected
    }
}