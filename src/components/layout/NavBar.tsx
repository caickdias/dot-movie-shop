import React, { useContext } from 'react'
import SearchBar from '../inputs/SearchBar'

import AppContext from '../../context/Context';

import ShoppingCart from '../icons/ShoppingCart';
import Favorite from '../icons/Favorite';

const Navbar = () => {

  const { sidebar, setSidebar } = useContext<any>(AppContext);

  const handleToggleSidebar = (tabName: string) => {    
    setSidebar(sidebar == tabName ? '' : tabName)
  }

  return (
    <div className="flex h-14 w-full p-6 px-14 justify-between items-center bg-[#8DD7CF]">
      <div className='w-1/4'>
        <h1 className='text-white font-bold text-4xl'>LOGO</h1>
      </div>

      <SearchBar />
      
      <div className='flex flex-row-reverse w-1/4'>
        <div className="flex justify-between w-1/4">
          <Favorite onClick={handleToggleSidebar} />        

          <ShoppingCart onClick={handleToggleSidebar} showItemsAmout />
        </div>
      </div>

    </div>
  )
}

export default Navbar