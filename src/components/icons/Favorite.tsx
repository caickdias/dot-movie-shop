import React from 'react'

import { AiFillHeart } from 'react-icons/ai';

type Props = {  
  onClick: (tabName: string) => void;
  size?: number;
  color?: string;
}

const Favorite = ({ onClick, size=30, color='white' }: Props) => {
  return (
    <button onClick={() => onClick('favorites')}>
        <AiFillHeart className='hover:scale-125 transition-all' color={color} size={size} />
    </button>
  )
}

export default Favorite