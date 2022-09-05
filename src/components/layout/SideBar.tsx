import React, { useContext } from 'react'
import LineDivider from '../LineDivider'

import AppContext from '../../context/Context'
import CartList from '../CartList';
import FavoritesList from '../FavoritesList';

type Props = {
  visible?: boolean;
}

const Sidebar = ({ visible }: Props) => {

  const { cart, favorites, sidebar } = useContext<any>(AppContext);

  return (
    <div className={`${visible ? 'w-4/12' : 'w-0'} border-l-4 border-gray-300 transition-all duration-300`}>
        <div className=''>        
          {
            sidebar == 'cart' && 
            <CartList />
          }
          {
            sidebar == 'favorites' &&
            <FavoritesList />
          }
        </div>
    </div>
  )
}

export default Sidebar