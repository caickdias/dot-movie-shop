import React, { useState, useEffect, useContext } from 'react'

import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';

import AppContext from '../../context/Context';
import MovieCard from '../MovieCard';

import { MovieProps } from '../../types/movie';
import { getTrending } from '../../services/api';

const Home = () => {
    
    const { cart, setCart, favorites, setFavorites, sidebar } = useContext<any>(AppContext);
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        getTrending()
        .then((res: any) => {
            setMovies([...res.results])
        })
    }, [])

    const handleAddToCart = (id: string) => {
        setCart([...cart, id])
    }

    const handleAddToFavorites = (id: string) => {
        setFavorites(favorites.includes(id) ? [...favorites.filter((movieId: string) => movieId != id)] : [...favorites, id])
    }

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50 overflow-clip">
            <Navbar />       
        

            <div className="flex h-full">
                <div className='flex flex-wrap overflow-y-scroll justify-evenly h-full w-full py-8 px-20'>
                    {
                        movies.map((movie: MovieProps) => (
                            <MovieCard 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                genre='opa'
                                price={movie.vote_average * 10}
                                vote_average={movie.vote_average}
                                poster_path={movie.poster_path}
                                release_date={movie.release_date}
                                onAddToCart={handleAddToCart}
                                onAddToFavorites={handleAddToFavorites}
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