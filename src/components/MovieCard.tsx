import React, { useContext } from 'react'

import AppContext from '../context/Context';

import { AiFillStar } from 'react-icons/ai';

import { formatCurrency } from '../utils/formatText';
import Button from './Button';
import Favorite from './icons/Favorite';

import { MovieProps } from '../types/movie';

type Props = MovieProps & {
  onAddToCart: (id: string) => void;
  onAddToFavorites: (id: string) => void;
}

const MovieCard = ({id, release_date, title, vote_average, genre, price, poster_path, onAddToCart, onAddToFavorites }: Props) => {
 
  const { favorites } = useContext<any>(AppContext);

  return (
    <div className='flex flex-col hover:scale-110 mx-8 mb-8 shadow-md shadow-gray-400 rounded-md bg-slate-100 min-w-[150px] w-52 transition-all'>
      
      <div className='flex flex-[5] relative bg-slate-300 rounded-t-md'>
        
        <img className='object-cover rounded-t-md' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='no image' />

        <div className='absolute right-4 top-4'>
          <Favorite 
            size={24} 
            color={`${favorites.includes(id) ? 'red' : 'white'}`} 
            onClick={() => onAddToFavorites(id)} 
          />            
        </div>
        
        <div className='absolute w-full bottom-2 text-center'>
          
        </div>

      </div>

      <div className='flex flex-[3] flex-col items-center justify-evenly'>
        <h1 className='font-bold'>{title}</h1>

        <div className='flex w-full items-center justify-center'>
          
          <div className='flex items-center justify-center leading-10 mr-4'>
            <AiFillStar color='gray' size={30} />
            <h1 className='font-bold'>
              {vote_average}
            </h1>
          </div>

          
        </div>

        <h1>
          {formatCurrency(price)}
        </h1>

      </div>

      <div className='flex h-10'>
        <Button title="Adicionar" onClick={() => onAddToCart(id)} />
      </div>

    </div>
  )
}

export default MovieCard