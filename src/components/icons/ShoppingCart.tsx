import React from 'react'

import { FaShoppingCart } from 'react-icons/fa';

const ShoppingCart = () => {
  return (
    <button>
        <FaShoppingCart className='ml-8 hover:scale-125 transition-all' color='white' size={30} />
    </button>
  )
}

export default ShoppingCart