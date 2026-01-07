import React, { useState } from 'react'
import { RiCloseLargeFill, RiMenu4Fill } from "react-icons/ri";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <header id="navbar" className='bg-green-950 fixed w-full top-0 left-0 z-50'>
            <nav className='container flex items-center justify-between h-16 sm:h-20'>

                <div className='font-Lobster sm:text-2xl'> IndoorPlants </div>

                <div id="nav-menu" className={`absolute top-0 ${showMenu ? 'left-[0]' : 'left-[-100%]'} min-h-[80vh]
       w-full bg-green-950/80 backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden
       lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}>

                    <ul className='flex flex-col items-center gap-8 lg:flex-row'>
                        <li><a href="#" className="text-lg font-bold duration-300 hover:text-yellow-500" onClick={handleLinkClick} >Home</a></li>
                        <li><a href="#" className="text-lg font-bold duration-300 hover:text-yellow-500" onClick={handleLinkClick} >About</a></li>
                        <li><a href="#" className="text-lg font-bold duration-300 hover:text-yellow-500" onClick={handleLinkClick} >Popular</a></li>
                        <li><a href="#" className="text-lg font-bold duration-300 hover:text-yellow-500" onClick={handleLinkClick} >Review</a></li>
                    </ul>

                    <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
                        <img src="../.././assests/img/leaf-1.png" alt="leaf_image" className="w-32" />
                    </div>

                    <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
                        <img src="../.././assests/img/leaf-2.png" alt="leaf_image" className="w-32" />
                    </div>
                </div>

                <div className='text-xl sm:text-3xl cursor-pointer z-50 lg:hidden' onClick={() => setShowMenu(!showMenu)}>
                    <i>{showMenu ? <RiCloseLargeFill /> : <RiMenu4Fill />}</i>
                </div>

            </nav>
        </header>
    )
}

export default Header