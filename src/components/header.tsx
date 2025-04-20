import logo from '../assets/images/Netflix-logo.png'
export const Header = () => {
    return (
        <header className="px-6">
            <nav className="flex justify-between items-center px-6 ">

                <div>
                    <img src={logo} alt="Netflix Logo" className="w-40"/>
                </div>

                <div>
                    <button
                        className="bg-white text-black text-sm px-4 py-2  rounded-full font-bold hover:bg-gray-200 whitespace-nowrap">Sign
                        In</button>
                </div>
            </nav>
        </header>
    )
}