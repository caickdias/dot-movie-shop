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
                    <MovieCard id={'1'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'2'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'3'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'4'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'5'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'6'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'7'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'8'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    <MovieCard id={'9'} date='03 agosto 2022' name='A volta' rating={7} genre='drama' price={68} image='none' />
                    
                    
                    
                </div>
                
                
                    <Sidebar visible={(sidebar.cart || sidebar.favorites)} />                        
                
            </div>
        </div>
    )
}

export default Home