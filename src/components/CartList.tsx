import React, { useContext } from 'react'
import LineDivider from './LineDivider';

import AppContext from '../context/Context';

import Button from './Button';
import CartItem from './CartItem';

const CartList = () => {

  const { cart } = useContext<any>(AppContext);
  
  return (
    <div className='p-2 h-fit'>
      <div>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl'>Meu Carrinho</h1>

        <a className='text-purple-500 underline' href="#">Esvaziar</a>
        </div>

        <LineDivider />        
      </div>

      <div className='flex flex-col justify-between'>
        <div>
          {
            cart.map((movieId: string) => <CartItem id={movieId} />)
          }
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between'>
            <h1>Total</h1>
            <h1 className='font-bold'>R$ 91,99</h1>
          </div>
          
          <div className='flex h-10 rounded-full mt-4'>
            <Button title="Finalizar compra" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList