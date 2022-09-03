import React, { useContext } from 'react'
import LineDivider from '../LineDivider'

import AppContext from '../../context/Context'

type Props = {
  visible?: boolean;
}

const Sidebar = ({ visible }: Props) => {

  const { cart, favorites } = useContext<any>(AppContext);

  return (
    <div className={`${visible ? 'w-1/4' : 'w-0'} border-l-4 border-gray-300 transition-all`}>
        <div className='p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-xl'>Meu Carrinho</h1>

            <a className='text-purple-500 underline' href="#">Esvaziar</a>
          </div>

          <LineDivider />        
        </div>
    </div>
  )
}

export default Sidebar