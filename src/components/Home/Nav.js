import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMessage, AiFillMedicineBox, AiFillVideoCamera } from "react-icons/ai";

const Nav = () => {
    return (
        <nav className="wraper flex flex-col rounded-3xl items-center py-6 shadow-sm">
            <FaBars className='text-5xl font-bold selected p-2 rounded-full' />
            <ul className='mt-20'>
                <li className=' my-4 py-10 px-2 rounded-full'><a href='#' className='flex flex-col items-center'>
                    <AiOutlineHome className='text-2xl' />
                    <p className="mt-2">Dashboard</p>
                </a></li>
                <li className='selected font-bold shadow-sm my-4 py-10 px-2 rounded-full'><a href='#' className='flex flex-col items-center'>
                    <AiOutlinePlus className='bg-orange-500 rounded-full text-white text-2xl p-[3px]' />
                    <p className="mt-2">Doctor</p>
                </a></li>
                <li className=' my-4 py-10 px-2 rounded-full'><a href='#' className='flex flex-col items-center'>
                    <AiOutlineMessage className='text-2xl' />
                    <p className="mt-2">Contact</p>
                </a></li>
                <li className=' my-4 py-10 px-2 rounded-full'><a href='#' className='flex flex-col items-center'>
                    <AiFillMedicineBox className='text-2xl' />
                    <p className="mt-2">Medicine</p>
                </a></li>
            </ul>
            <span></span>
        </nav>
    );
};

export default Nav;