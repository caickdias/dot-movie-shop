import React from 'react'

type Props = {
    title: string;
    onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return (
    <button 
        className='flex flex-[1] bg-violet-600 rounded-b-md items-center justify-center'
        onClick={onClick}
      >
        <p className='text-white font-bold'>{title}</p>
      </button>
  )
}

export default Button