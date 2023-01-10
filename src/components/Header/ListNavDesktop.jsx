import { NavLinks } from "./NavLinks"

export const ListNavDesktop = ({navLinks, setOpen}) => {


    return(
        <ul className='hidden md:flex gap-8  w-36 justify-around  mr-36'>
            <NavLinks navLinks={navLinks} desktop={true} setOpen ={ setOpen }/>
        </ul>
    )
}