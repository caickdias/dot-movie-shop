import React, { useContext } from 'react'

import { FaShoppingCart } from 'react-icons/fa';

type Props = {  
  onClick: (tabName: string) => void;
  size?: number;
  color?: string;
}

const ShoppingCart = ({ onClick, size=30, color='white' }: Props) => {

  return (
    <button onClick={() => onClick('cart')}>
        <FaShoppingCart className='ml-8 hover:scale-125 transition-all' color={color} size={size} />
    </button>
  )
}

export default ShoppingCart