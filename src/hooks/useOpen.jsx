import { useState } from "react"


export const useOpen = () => {

    const [ open, setOpen ] = useState(false)
    const [ openBag, setBag ] = useState(false)

    var body = document.getElementsByTagName('body')[0]



    return{
        open,
        openBag,

        setOpen,
        setBag
    }
}