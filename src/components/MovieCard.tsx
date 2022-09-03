import React from 'react'

import { AiFillStar } from 'react-icons/ai';

import { formatCurrency } from '../utils/format';
import Favorite from './icons/Favorite';

import { MovieProps } from './types/movie';

const MovieCard = ({ date, name, rating, genre, price, image }: MovieProps) => {
  return (
    <div className='flex flex-col hover:scale-110 mx-8 mb-8 shadow-md shadow-gray-400 rounded-md bg-slate-100 min-w-[150px] h-80 w-52 transition-all'>
      
      <div className='flex flex-[5] relative bg-slate-300 rounded-t-md'>
        
        <div className='absolute right-4 top-4'>
          <Favorite size={24} color='darkBlue' onClick={() => {}} />          
        </div>
        
        <div className='absolute w-full bottom-2 text-center'>
          <h1>
            {date}
          </h1>
        </div>


      </div>

      <div className='flex flex-[3] flex-col items-center justify-evenly'>
        <h1 className='font-bold'>{name}</h1>

        <div className='flex w-full items-center justify-center'>
          
          <div className='flex items-center justify-center leading-10 mr-4'>
            <AiFillStar color='gray' size={30} />
            <h1 className='font-bold'>
              {rating}
            </h1>
          </div>

          {genre}
        </div>

        <h1>
          {formatCurrency(price)}
        </h1>

      </div>

      <button className='flex flex-[1] bg-violet-600 rounded-b-md items-center justify-center'>
        <p className='text-white font-bold'>Adicionar</p>
      </button>
    </div>
  )
}

export default MovieCard