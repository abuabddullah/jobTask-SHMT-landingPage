import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMessage, AiFillMedicineBox, AiFillVideoCamera } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";

const AvailableDoctor = () => {
    return (
        <div className="availableDoctors p-6 mr-0  pt-16">
            <div>
                <h2 className='text-3xl font-bold text-center'>Your Treatment</h2>
                <div className="card wraper shadow-sm my-6">
                    <div className="card-body p-4">
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1577202214328-c04b77cefb5d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=32&ixid=MnwxfDB8MXxyYW5kb218MHx8bWVuLHBlcnNvbnx8fHx8fDE2NTU3MTkwODI&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=32" alt="" className='rounded-full w-12 mr-4' />
                            <div className=''>
                                <h5 className="card-title">Dr. Lida Gutierrez</h5>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Heart Surgeon,London,England.</p>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className="card-title">Surgeon</h5>
                            <p className="text-[#A9A6C1] card-text whitespace-normal">Heart Surgeon</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className=''>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Date</p>
                                <h5 className="card-title">20 Nov 2020</h5>
                            </div><div className=''>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Time</p>
                                <h5 className="card-title">10:00 AM</h5>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <button class="btn btn-outline selected border-[#EEDFFD] ">Appoinment</button>
                            <div className='grid grid-cols-2 gap-4'>
                                <BsFillTelephoneFill className='bg-white rounded-full text-orange-500 text-4xl p-2' />
                                <AiFillVideoCamera className='bg-white rounded-full text-blue-400 text-4xl p-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card selected shadow-sm my-6">
                    <div className="card-body p-4">
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1589327665717-adbfccff9572?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=32&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29uLG1hbGV8fHx8fHwxNjU1NzIwODMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=32" alt="" className='rounded-full w-12 mr-4' />
                            <div className=''>
                                <h5 className="card-title">Dr. Chistiana Frazier</h5>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Heart Surgeon,London,England.</p>
                            </div>
                        </div>
                        <div className='my-4'>
                            <h5 className="card-title">Medicine</h5>
                            <p className="text-[#A9A6C1] card-text whitespace-normal">Specialist</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className=''>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Date</p>
                                <h5 className="card-title">25 Nov 2020</h5>
                            </div><div className=''>
                                <p className="text-[#A9A6C1] card-text whitespace-normal">Time</p>
                                <h5 className="card-title">11:00 AM</h5>
                            </div>
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <button class="btn btn-outline wraper border-[#EEDFFD] ">Appoinment</button>
                            <div className='grid grid-cols-2 gap-4'>
                                <BsFillTelephoneFill className='bg-white rounded-full text-orange-500 text-4xl p-2' />
                                <AiFillVideoCamera className='bg-white rounded-full text-blue-400 text-4xl p-2' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between wraper shadow-sm p-4 rounded-xl">
                    <div className='bg-blue-400 text-white  rounded-xl p-4'>
                        <h2 className="text-lg font-bold">
                            5500 6677 000 99
                        </h2>
                        <div className="flex items-center justify-between text-base">
                            <p className='opacity-70'>Harold Mann</p>
                            <p><strong>VISA</strong></p>
                        </div>
                    </div>

                    <div className='flex items-center flex-col'>
                        
                    <GrSettingsOption className='bg-white rounded-xl text-4xl p-2' />
                    <p className="mt-2">Setting</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailableDoctor;