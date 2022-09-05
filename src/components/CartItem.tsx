import React, { useState, useEffect } from 'react'

import { MovieProps } from '../types/movie';
import { formatCurrency } from '../utils/format';
import Trash from './icons/Trash';

import { getMovieInfo } from '../services/api';

type Props = {
    id: number;
}

const CartItem = ({id }: Props) => {
    
    const [movie, setMovie] = useState({} as MovieProps);

    useEffect(() => {
        getMovieInfo(id)
        .then((res) => {
            setMovie(res)
        })
    })

    return (
        <div className='flex w-full my-2 items-center justify-between'>
            <div className="flex w-3/5 items-center">
                <img 
                    className='object-fit rounded-md w-14' 
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt='no image' 
                />  

                <h1 className='text-base m-2'>{movie.title}</h1>
            </div>
            
            <div className="flex w-2/5 justify-around">
                <h1 className='text-base m-2'>{formatCurrency(movie.vote_average * 10)}</h1>
                            
                <Trash size={20} color='darkGray' onClick={() => {}} />            
            </div>
            
        </div>
    )
}

export default CartItem