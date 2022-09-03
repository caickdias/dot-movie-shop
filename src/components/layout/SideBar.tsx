import React, { useContext } from 'react'
import LineDivider from '../LineDivider'

import AppContext from '../../context/Context'

const Sidebar = () => {

  const { cart, favorites } = useContext<any>(AppContext);

  return (
    <div className="w-1/5 p-4 border-l-4 border-gray-300">
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-xl'>Meu Carrinho</h1>

          <a className='text-purple-500 underline' href="#">Esvaziar</a>
        </div>

        <LineDivider />        

    </div>
  )
}

export default Sidebar