import { useState } from "react"


export const useOpen = () => {

    const [ open, setOpen ] = useState(false)
    const [ openBag, setBag ] = useState(false)


    return{
        open,
        openBag,

        setOpen,
        setBag
    }
}