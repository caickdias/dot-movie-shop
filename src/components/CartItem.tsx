import React from 'react'

import { MovieProps } from '../types/movie';
import { formatCurrency } from '../utils/format';
import Trash from './icons/Trash';

import { getMovieInfo } from '../services/api';

type Props = {
    id: string;
}


const CartItem = ({id }: Props) => {
    

    return (
        <div className='flex w-full my-2 items-center justify-between'>
            <div className="flex w-3/5 ">
                <div className='h-10 w-10 bg-gray-400'>
                </div>

                <h1 className='text-base m-2'>aa</h1>
            </div>
            
            <div className="flex w-2/5 justify-around">
                <h1 className='text-base m-2'>{formatCurrency(22)}</h1>
                            
                <Trash size={20} color='darkGray' onClick={() => {}} />            
            </div>
            
        </div>
    )
}

export default CartItem