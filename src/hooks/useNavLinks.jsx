import { useEffect, useState } from "react"
import { getLinksToNavBar } from "../utils"



export const useNavLinks = (auth) => {

    console.log(auth)

    const autho = {
        status : 'authenticated',
        role : 'admin'
    }
    

    const [ navLinks, setNavLinks ] = useState([])

    
    useEffect( () => {
        const navLinks = getLinksToNavBar(autho)
        setNavLinks(navLinks) 
    }, [auth])



    return{
        navLinks
    }
}