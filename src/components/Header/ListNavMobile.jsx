import { useEffect } from "react"
import { useRef } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { GetEmail } from "./GetEmail"
import { NavLinks } from "./NavLinks"

export const ListNavMobile = ({open, navLinks, setOpen}) => {

    const onCloseNavBar = () => {
        console.log(open)
        setOpen(false)
    }

    const menuMobileRef = useRef();
    

    useEffect( () => {
        document.addEventListener( "click" , handleOutSideClick, true )

    })

    const handleOutSideClick = ( { target }) => {
        if(!menuMobileRef.current.contains( target )){
            setOpen(false)
        }
    }



    return(
        <ul
            className={` fixed left-0 top-0 w-11/12 h-screen z-[999] bg-bg_light_primary drop-shadow-2xl flex flex-col
            p-4 transition-all duration-300
            ${open ? 'max-w-md' : 'left-[-100%]'}
            `}
            ref={menuMobileRef}
        >
            <AiOutlineClose 
                className={`self-end  border-black md:hidden`} 
                onClick={ onCloseNavBar}
                size={24}
            />
            <NavLinks navLinks={navLinks} setOpen={setOpen}/>
            <GetEmail/>
        </ul>

    )
}