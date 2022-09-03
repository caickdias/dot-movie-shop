import React, { useState, ReactNode } from 'react';

import AppContext from './Context';

type Props = {
    children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
    const [cart, setCart] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [sidebar, setSidebar] = useState({ cart: false, favorites: false})

    return(
        <AppContext.Provider value={{cart, setCart, favorites, setFavorites, sidebar, setSidebar}}>
            {children}
        </AppContext.Provider>
    )
}