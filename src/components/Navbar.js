import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/bslogo.png';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-white'>
      <div>
        <img src={Logo} alt='logo' className='w-[40px] h-[40px]' />
      </div>
    </div>
  )
}

export default Navbar