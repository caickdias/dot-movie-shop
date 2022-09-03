import React from 'react'

import { movies } from '../data/dummy';
import { MovieProps } from './types/movie';
import { formatCurrency } from '../utils/format';
import Trash from './icons/Trash';

type Props = {
    id: string;
}


const CartItem = ({id }: Props) => {

    const movie: MovieProps | any = movies.find((movie: MovieProps) => movie.id == id)

    return (
        <div className='flex w-full my-2 items-center justify-between font-bold'>
            <div className='h-12 w-12 bg-gray-400'>

            </div>

            <h1 className='m-2'>{movie.name}</h1>
            
            <h1 className='m-2'>{formatCurrency(movie.price)}</h1>
                        
            <Trash size={20} color='darkGray' onClick={() => {}} />            
            
        </div>
    )
}

export default CartItem