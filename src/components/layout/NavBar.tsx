import React from 'react'
import SearchBar from '../inputs/SearchBar'

import ShoppingCart from '../icons/ShoppingCart';
import Favorite from '../icons/Favorite';

const NavBar = () => {
  return (
    <div className="flex h-14 w-full p-6 px-14 justify-between items-center bg-[#8DD7CF]">
      <div>
        <h1 className='text-white font-bold text-4xl'>LOGO</h1>
      </div>

      <SearchBar />
      
      <div className='flex'>
        <Favorite />        

        <ShoppingCart />
      </div>

    </div>
  )
}

export default NavBar