import { NavLinks } from "./NavLinks"

export const ListNavDesktop = ({navLinks, setOpen}) => {


    return(
        <ul className='hidden md:flex gap-8  mr-36 font-400 w-1/3 justify-between'>
            <NavLinks navLinks={navLinks} desktop={true} setOpen ={ setOpen }/>
        </ul>
    )
}