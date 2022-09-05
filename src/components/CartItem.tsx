import React from 'react'

import { MovieProps } from '../types/movie';
import { formatCurrency } from '../utils/format';
import Trash from './icons/Trash';

type Props = {
    id: string;
}


const CartItem = ({id }: Props) => {

    const movie: MovieProps | any = movies.find((movie: MovieProps) => movie.id == id)

    return (
        <div className='flex w-full my-2 items-center justify-between'>
            <div className="flex w-3/5 ">
                <div className='h-10 w-10 bg-gray-400'>
                </div>

                <h1 className='text-base m-2'>{movie.name}</h1>
            </div>
            
            <div className="flex w-2/5 justify-around">
                <h1 className='text-base m-2'>{formatCurrency(movie.price)}</h1>
                            
                <Trash size={20} color='darkGray' onClick={() => {}} />            
            </div>
            
        </div>
    )
}

export default CartItem