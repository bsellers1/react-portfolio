import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-slate-900'>
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#fde047]">Hi, My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">Brian Sellers Jr.</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#a8a29e]">Full Stack Developer.</h2>
                <p className="text-[#a8a29e] py-4 max-w-[700px]">I am focused on building responsive full-stack web applications.</p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#fde047] hover:border-[#fde047]">View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Home;