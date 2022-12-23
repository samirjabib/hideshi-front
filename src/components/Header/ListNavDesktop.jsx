import { NavLinks } from "./NavLinks"

export const ListNavDesktop = ({navLinks, setOpen}) => {


    return(
        <ul className='hidden md:flex gap-8'>
            <NavLinks navLinks={navLinks} desktop={true} setOpen ={ setOpen }/>
        </ul>
    )
}