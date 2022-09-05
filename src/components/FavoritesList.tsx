import React, { useContext } from 'react';
import AppContext from '../context/Context';
import FavoritesItem from './FavoritesItem';

import LineDivider from './LineDivider'

const FavoritesList = () => {
  const { favorites, setFavorites, cart, setCart } = useContext<any>(AppContext);
  
  const handleRemoveItem = (id: number) => {
    setFavorites([...favorites.filter((movieId:number) => movieId != id)]);
  }

  const handleAddToCart = (id: number) => {
    if(!cart.includes(id)){
      setCart([...cart, id]);
  }
  }

  const emptyCart = () => setFavorites([]);

  return (
    <div className='p-4 h-fit'>
      <div>
        <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl'>Meus Favoritos</h1>

        <a className='text-purple-500 underline' href="#" onClick={emptyCart}>Esvaziar</a>
        </div>

        <LineDivider />        
      </div>

      <div className='flex flex-col justify-between'>
        <div>
          {
            favorites.map((movieId: number) => (
              <FavoritesItem 
                key={movieId} 
                id={movieId} 
                onRemove={handleRemoveItem}
                onAddToCart={handleAddToCart}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default FavoritesList