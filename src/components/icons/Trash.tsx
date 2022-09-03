import React from 'react'

import { FaTrash } from 'react-icons/fa';

type Props = {  
  onClick: (tabName: string) => void;
  size?: number;
  color?: string;
}

const Trash = ({ onClick, size=30, color='white' }: Props) => {
  return (
    <button onClick={() => onClick('cart')}>
        <FaTrash color={color} size={size} />
    </button>
  )
}

export default Trash