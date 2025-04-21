import logo from '../assets/images/Netflix-logo.png'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
export const Header = () => {
    useEffect(()=>{
        document.title="Netflix clone"
    },[]);
    return (
        <header className="px-6">
            <nav className="flex justify-between items-center px-6 ">

                <div>
                    <img src={logo} alt="Netflix Logo" className="w-40"/>
                </div>

                <div>
                    <NavLink
                        className="bg-white text-black text-sm px-4 py-2  rounded-full font-bold hover:bg-gray-200 whitespace-nowrap" to={'/signup'}>Sign
                        In</NavLink>
                </div>
            </nav>
        </header>
    )
}