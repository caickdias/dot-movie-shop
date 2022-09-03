import React, { useContext } from 'react'
import SearchBar from '../inputs/SearchBar'

import AppContext from '../../context/Context';

import ShoppingCart from '../icons/ShoppingCart';
import Favorite from '../icons/Favorite';

const Navbar = () => {

  const { sidebar, setSidebar } = useContext<any>(AppContext);

  const handleToggleSidebar = (tabName: string) => {    
    setSidebar({
      [tabName]: !sidebar[tabName],
    })
  }

  return (
    <div className="flex h-14 w-full p-6 px-14 justify-between items-center bg-[#8DD7CF]">
      <div>
        <h1 className='text-white font-bold text-4xl'>LOGO</h1>
      </div>

      <SearchBar />
      
      <div className='flex'>
        <Favorite onClick={handleToggleSidebar} />        

        <ShoppingCart onClick={handleToggleSidebar} />
      </div>

    </div>
  )
}

export default Navbar