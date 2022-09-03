import React from 'react'
import LineDivider from './LineDivider';

const CartList = () => {
  return (
    <div className='p-4'>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl'>Meu Carrinho</h1>

        <a className='text-purple-500 underline' href="#">Esvaziar</a>
        </div>

        <LineDivider />        
    </div>
  )
}

export default CartList