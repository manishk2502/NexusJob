
import React, { useState } from 'react';
 import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
 import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
     const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

  return (
    <div className='text-center bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 py-24 text-white relative overflow-hidden'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-full h-full opacity-10'>
            <div className='absolute top-20 left-20 w-40 h-40 bg-white rounded-full'></div>
            <div className='absolute bottom-10 right-20 w-32 h-32 bg-yellow-300 rounded-full'></div>
            <div className='absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full'></div>
        </div>
        
        <div className='relative flex flex-col gap-8 my-10 max-w-4xl mx-auto px-4'>
            <span className='mx-auto px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold shadow-lg animate-pulse'>
                Your Ultimate Career Platform
            </span>
            
            <h1 className='text-5xl md:text-6xl font-bold leading-tight'>
                Search, Apply & <br />
                <span className='text-yellow-300 bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent'>
                    Land Your Dream Job
                </span>
            </h1>
            
            <p className='text-xl text-white/90 max-w-2xl mx-auto'>
                Discover your path to success with opportunities crafted just for you.
            </p>
            
            <div className='flex w-full max-w-2xl shadow-2xl border border-white/20 pl-6 rounded-full items-center gap-3 bg-white/10 backdrop-blur-sm mx-auto transition-all duration-300 hover:bg-white/15'>
                <Search className='h-5 w-5 text-white/70' />
                <input
                    type="text"
                    placeholder='Find your dream job...'
                    onChange={(e) => setQuery(e.target.value)}
                    className='outline-none border-none w-full bg-transparent text-white py-4 px-2 placeholder-white/70'
                />
                <button 
                    onClick={searchJobHandler} 
                    className="rounded-r-full px-6 py-4 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-purple-900 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                    <Search className='h-5 w-5' />
                    Search
                </button>
            </div>
            
            <div className='flex justify-center gap-4 mt-6'>
                <span className='text-sm text-white/80'>Popular: </span>
                <button className='text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors'>Developer</button>
                <button className='text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors'>Designer</button>
                <button className='text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors'>Marketing</button>
            </div>
        </div>
    </div>
);
}

export default HeroSection;
