import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/bslogo.png';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white'>
            <div>
                <img src={Logo} alt='logo' className='w-[40px] h-[40px]' />
            </div>
            <div>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='hidden'>
                <FaBars />
            </div>

            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div>

            </div>
        </div>
    )
}

export default Navbar