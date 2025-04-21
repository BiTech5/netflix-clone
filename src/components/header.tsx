import logo from '../assets/images/Netflix-logo.png'
import { NavLink } from 'react-router-dom'
import smlogo from "../assets/images/sm-logo.png"
import { useEffect } from 'react'
export const Header = () => {
    useEffect(() => {
        document.title = "Netflix clone"
    }, []);
    return (
        <header className="px-4 sm:px-6 py-4">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <div>
                    <img src={logo} alt="Netflix Logo" className="w-32 sm:w-40 hidden md:block" />
                    <img src={smlogo} alt="Netflix Logo Small" className="w-8 sm:w-10 block md:hidden" />
                </div>

                <div>
                    <NavLink
                        to="/signup"
                        className="bg-white text-black text-xs sm:text-sm px-4 py-1.5 sm:py-2 rounded-full font-bold hover:bg-gray-200 whitespace-nowrap transition-colors duration-200"
                    >
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>

    )
}