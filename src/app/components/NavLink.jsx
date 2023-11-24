// import Link from "next/link"
import { Link } from 'react-scroll'

const NavLink = ({ to, title }) => {
    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-gray-200'
        >
            {title}
        </Link>
    )
}

export default NavLink