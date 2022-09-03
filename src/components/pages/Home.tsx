import React from 'react'
import NavBar from '../layout/NavBar';
import SideBar from '../layout/SideBar';

const Home = () => {

    const showNavbar = true;

    return (
        <div className="flex flex-col h-screen w-screen bg-gray-50">
            <NavBar />
            
            <div className="flex h-full">
                <div className='h-full w-4/5'>

                </div>
                
                { showNavbar &&
                    <SideBar />
                }
            </div>
        </div>
    )
}

export default Home