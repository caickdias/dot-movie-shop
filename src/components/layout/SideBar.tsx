import React, { useContext } from 'react'

import AppContext from '../../context/Context'
import CartList from '../CartList';

type Props = {
  visible?: boolean;
}

const Sidebar = ({ visible }: Props) => {

  const { cart, favorites } = useContext<any>(AppContext);

  return (
    <div className={`${visible ? 'w-1/4' : 'w-0'} border-l-4 border-gray-300 transition-all duration-300`}>
      <CartList />
    </div>
  )
}

export default Sidebar