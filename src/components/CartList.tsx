import React, { useContext } from 'react'
import LineDivider from './LineDivider';

import AppContext from '../context/Context';
import { MovieProps } from './types/movie';

import { movies } from '../data/dummy';

import CartItem from './CartItem';

const CartList = () => {

  const { cart } = useContext<any>(AppContext);
  
  return (
    <div className='p-4'>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl'>Meu Carrinho</h1>

        <a className='text-purple-500 underline' href="#">Esvaziar</a>
        </div>

        <LineDivider />        

        {
          cart.map((movieId: string) => <CartItem id={movieId} />)
        }
    </div>
  )
}

export default CartList