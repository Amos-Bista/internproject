import React, { useState } from 'react'

const Header = () => {

    const [MenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!MenuOpen)
    }



    return (
        <header className='flex justify-between items-center bg-white py-4 px-6 border-b-2'>
            <div className='text-2xl px-14 font-meduim '>Niled.</div>
            {/* added for mobile trial */}
            <button className='block lg:hidden px-4 py-2 text-gray-900 focus:outline-none'
                onClick={toggleMenu}>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>

            </button>

            <nav className='hidden lg:flex items-center space-x-8'>
                <a href="#" className='hover:underline'>About us</a>
                <a href="#" className='hover:underline'>Partners</a>
                <a href="#" className='hover:underline'>Portfolio</a>
                <a href="#" className='hover:underline'>FAQ</a>
            </nav>
            <div className='hidden lg:flex'>
                <button className='mr-6 px-4 py-2 rounded bg-white'>Log in</button>
                <button className='mr-16 px-6 py-2 bg-gray-800 rounded-full text-white text-sm'>Sign up</button>
            </div>

            {/* menu starts here for mobile */}

            {
                MenuOpen && (
                    <div className='absolute top-16 mt-2 right-0 w-1/2 bg-white p-6 border-t-2 flex-col space-y-6 lg:hidden'>
                        <nav className='flex flex-col space-y-4'>
                            <a href="#" onClick={toggleMenu}>About us</a>
                            <a href="#" onClick={toggleMenu}>Partners</a>
                            <a href="#" onClick={toggleMenu}>Portfolio</a>
                            <a href="#" onClick={toggleMenu}>FAQ</a>
                        </nav>
                        <div className='flex flex-col space-y-2'>
                            <button className='px-4 py-2 rounded bg-gray-800 text-white'>Log in</button>
                            <button className='px-4 py-2 rounded bg-gray-800 text-white'>Sign up</button>

                        </div>

                    </div>

                
            )}





        </header>
    )
}

export default Header