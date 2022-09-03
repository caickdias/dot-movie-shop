import React, { useContext } from 'react'

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

import AppContext from '../../context/Context';
import MovieCard from '../MovieCard';

const Home = () => {
    
    const { setCart, setFavorites, sidebar, setSidebar } = useContext<any>(AppContext);

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50 overflow-clip">
            <Navbar />
            
            <div className="flex h-full">
                <div className='flex flex-wrap overflow-y-scroll justify-evenly h-full w-full py-8 px-24'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                    <MovieCard />                                                            
                </div>
                
                
                    <Sidebar visible={(sidebar.cart || sidebar.favorites)} />                        
                
            </div>
        </div>
    )
}

export default Home