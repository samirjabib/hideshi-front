import { AiOutlineClose } from "react-icons/ai"
import { GetEmail } from "./GetEmail"
import { NavLinks } from "./NavLinks"

export const ListNavMobile = ({open, navLinks, setOpen}) => {

    const onCloseNavBar = () => {
        console.log(open)
        setOpen(false)
    }

    return(
        <ul
        className={` fixed left-0 top-0 w-11/12 h-screen z-[999] bg-bg_light_primary drop-shadow-2xl flex flex-col
        p-4 transition-all duration-300
        ${open ? '' : 'left-[-100%]'}
        `}
        >
            <AiOutlineClose 
                className={`self-end  border-black md:hidden`} 
                onClick={ onCloseNavBar}
                size={24}
            />
            <NavLinks navLinks={navLinks}/>
            <GetEmail/>
        </ul>

    )
}