import { NavLinks } from "./NavLinks"

export const ListNavDesktop = ({navLinks}) => {


    return(
        <ul className='hidden md:flex gap-8'>
            <NavLinks navLinks={navLinks} desktop={true}/>
        </ul>
    )
}