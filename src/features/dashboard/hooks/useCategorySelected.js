import { useState } from 'react'

const listCategories = [ 
    { id:1, name:'T-shirt', },
    { id:2, name:'Cap', },
    { id:3, name:'Pants', },
    { id:4, name:'Jewelry', },
]

export const useCategorySelected = () => {
    const [ isSelected, setIsSelected ] = useState('Category');

    return{
        isSelected,
        listCategories,
        setIsSelected
    }
}