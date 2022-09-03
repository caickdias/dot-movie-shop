import React, { useContext } from 'react'

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

import AppContext from '../../context/Context';
import MovieCard from '../MovieCard';

const Home = () => {
    
    const { setCart, setFavorites, sidebar, setSidebar } = useContext<any>(AppContext);

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50">
            <Navbar />
            
            <div className="flex h-full">
                <div className='flex justify-between h-full w-full py-8 px-24'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    
                </div>
                
                { (sidebar.cart || sidebar.favorites) &&                    
                    <Sidebar />                        
                }
            </div>
        </div>
    )
}

export default Home