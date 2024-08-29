import React from 'react'

const Header = () => {
  return (
   <header className='flex justify-between items-center bg-white py-4 px-6 border-b'>
    <div className='text-2xl px-14 font-meduim '>Niled.</div>
    <nav className='flex items-center space-x-8'>
        <a href="#">About us</a>
        <a href="#">Partners</a>
        <a href="#">Portfolio</a>
        <a href="#">FAQ</a>
    </nav>
    <div>
        <button className='mr-6 px-4 py-2 rounded bg-white hover:bg-gray-800'>Log in</button>
        <button className='mr-16 px-6 py-2 bg-gray-800 rounded-full text-white'>Sign up</button>
    </div>
   </header>
  )
}

export default Header