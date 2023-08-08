import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/bslogo.png';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white'>
            
            <div>
                <img src={Logo} alt='logo' className='w-[40px] h-[40px]' />
            </div>

            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                <FaBars />
            </div>
            
            <ul className={!show ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            <div className='hidden'>

            </div>
        </div>
    )
}

export default Navbar