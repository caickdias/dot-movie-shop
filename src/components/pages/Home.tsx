import React, { useContext } from 'react'

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

import AppContext from '../../context/Context';
import MovieCard from '../MovieCard';

import { movies } from '../../data/dummy';
import { MovieProps } from '../types/movie';

const Home = () => {
    
    const { cart, setCart, setFavorites, sidebar, setSidebar } = useContext<any>(AppContext);

    const handleAddToCart = (id: string) => {
        setCart([...cart, id])
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50 overflow-clip">
            <Navbar />
            
            <div className="flex h-full">
                <div className='flex flex-wrap overflow-y-scroll justify-evenly h-full w-full py-8 px-24'>
                    {
                        movies.map((movie: MovieProps) => (
                            <MovieCard 
                                id={movie.id}
                                name={movie.name}
                                genre={movie.date}
                                price={movie.price}
                                rating={movie.rating}
                                image={movie.image}
                                date={movie.date}
                                onAddToCart={handleAddToCart}
                            />
                        ))
                    }
                </div>
                
                
                <Sidebar visible={sidebar != ''} />                        
                
            </div>
        </div>
    )
}

export default Home