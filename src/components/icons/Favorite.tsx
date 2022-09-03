import React from 'react'

import { AiFillHeart } from 'react-icons/ai';

const Favorite = () => {
  return (
    <button>
        <AiFillHeart className='ml-8 hover:scale-125 transition-all' color='white' size={30} />
    </button>
  )
}

export default Favorite