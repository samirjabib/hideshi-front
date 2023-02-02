import { useEffect, useState } from "react"
import { getLinksToNavBar } from "../utils"



export const useNavLinks = (auth) => {

    console.log(auth)

    const [ navLinks, setNavLinks ] = useState([])

 

    useEffect( () => {
        const navLinks = getLinksToNavBar(auth)
        setNavLinks(navLinks) 
    }, [auth])



    return{
        navLinks
    }
}