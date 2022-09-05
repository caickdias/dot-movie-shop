import React, { useContext } from 'react'

import AppContext from '../../context/Context';

import { FaShoppingCart } from 'react-icons/fa';

type Props = {  
  onClick: (tabName: string) => void;
  size?: number;
  color?: string;
  showItemsAmout?: boolean;
}

const ShoppingCart = ({ onClick, size=30, color='white', showItemsAmout=false }: Props) => {

  const { cart } = useContext<any>(AppContext);

  return (
    <button className='relative' onClick={() => onClick('cart')}>
        <FaShoppingCart className='hover:scale-125 transition-all' color={color} size={size} />
        { showItemsAmout &&
          <div className='flex items-center justify-center h-5 w-5 bg-yellow-400 absolute -right-2 -top-1 rounded-full text-center'>
          <p>{cart.length}</p>
          </div>
        }
    </button>
  )
}

export default ShoppingCart