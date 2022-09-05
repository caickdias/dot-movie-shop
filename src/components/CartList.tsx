import React, { useContext } from 'react'
import LineDivider from './LineDivider';

import AppContext from '../context/Context';

import Button from './Button';
import CartItem from './CartItem';
import { formatCurrency } from '../utils/format';

const CartList = () => {

  const { cart, setCart } = useContext<any>(AppContext);
  
  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((movieId: number) => movieId != id));
  }

  const emptyCart = () => setCart([]);

  return (
    <div className='p-4 min-h-screen max-h-screen'>
      <div>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl'>Meu Carrinho</h1>

        <a className='text-purple-500 underline' href="#" onClick={emptyCart}>Esvaziar</a>
        </div>

        <LineDivider />        
      </div>

      <div className='flex flex-col justify-between'>
        <div>
          {
            cart.map((movieId: number) => (
              <CartItem 
                key={movieId} 
                id={movieId} 
                onRemove={handleRemoveItem}
              />
            ))
          }
        </div>

        <div className='flex flex-col'>
          <div className='flex items-center justify-between'>
            <h1>Total</h1>
            <h1 className='font-bold'>{formatCurrency(0)}</h1>
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