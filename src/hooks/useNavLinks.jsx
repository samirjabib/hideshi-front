import { useEffect, useState } from "react"

    
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/auth/login', display:'login'}
]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/dashboard/state-products', display:'Dashboard'},

]


export const useNavLinks = (auth) => {
    const { role, status } = auth

    const [ navLinks, setNavLinks ] = useState()
    
    useEffect( () => {
        if(role === "admin" && status ==="authenticated"){
            setNavLinks(adminNav) 

        }
        if(role === "user" && status ==="authenticated"){
            setNavLinks(authNav) 

        }
        if(status === "not-authenticated"){
            setNavLinks(defaultNav) 

        }
    }, [auth])


    return{
        navLinks
    }

    
}

