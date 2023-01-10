import { useEffect, useState } from "react"
import { getLinksToNavBar } from "../utils"

const auth = {
    user:{
        id:2, 
        user:'bamba', 
        role:'user'
    },
    status:'not-authenticated',
    
}

export const useNavLinks = () => {

    const [ navLinks, setNavLinks ] = useState([])

    
    useEffect( () => {
        const navLinks = getLinksToNavBar(auth)
        setNavLinks(navLinks) 
    }, [auth])



    return{
        navLinks
    }
}