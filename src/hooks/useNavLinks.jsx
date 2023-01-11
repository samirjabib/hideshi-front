import { useEffect, useState } from "react"
import { getLinksToNavBar } from "../utils"

const autho = {
    // user:{
    //     id:2, 
    //     user:'bamba', 
    //     role:'user'
    // },
    status:'not-authenticated',
    
}



export const useNavLinks = (auth) => {

    
    

    const [ navLinks, setNavLinks ] = useState([])

    
    useEffect( () => {
        const navLinks = getLinksToNavBar(auth)
        setNavLinks(navLinks) 
    }, [autho])



    return{
        navLinks
    }
}