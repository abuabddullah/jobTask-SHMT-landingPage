import React from 'react';
import { MdNotificationsNone } from "react-icons/md";
import { AiOutlineHome, AiOutlinePlus, AiOutlineMessage, AiFillMedicineBox, AiFillVideoCamera } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import { getDates } from '../../utilities/getDates';
import CarouselSect from './CarouselSect';

const examinations = [
    {
        date: "23 Dec 2020",
        specialism: "Heart Surgeon",
        name: "Ellen Bradley",
    },
    {
        date: "24 Nov 2020",
        specialism: "Medicine Specilist",
        name: "Luke McKenney",
    },
    {
        date: "15 May 2020",
        specialism: "Backpain Specilist",
        name: "Cameron Holland",
    },
]

const AvailableAppoinments = () => {
    const dates = getDates();
    return (

        <div className="appoinmentsSect p-6 pt-16 ml-0 relative">
            <div>
                <h2 className='text-xl font-bold'>Make An Appoinment, That Will Help You! To choose a doctor.</h2>
                <div className="card wraper shadow-sm my-8">
                    <div className="card-body px-4"py-6>
                        <h2 className='text-xl font-bold'>Consults for today</h2>
                        <div>

                            <ul className="flex flex-wrap my-4">
                                {
                                    dates.map((date) => <li
                                        className={date.style}
                                        style={{
                                            width: "32px", height: "32px",
                                            lineHeight: "32px",
                                            textAlign: "center"
                                        }}
                                    >
                                        {date.value}
                                    </li>)
                                }
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="card wraper shadow-sm my-8 relative">
                    <div className="card-body p-6">
                        <h2 className='text-xl font-bold'>Examinations</h2>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                examinations.map(exam => <div
                                    className='card wraper shadow-sm p-4'
                                >
                                    <p className="text-[#A9A6C1] card-text whitespace-normal">{exam.date}</p>
                                    <h5 className="card-title">{exam.specialism}</h5>
                                    <p className="text-[#A9A6C1] card-text whitespace-normal">{exam.name}</p>
                                </div>)
                            }

                        </div>

                    </div>
                    <span className='text-blue-400 absolute top-6 right-6 cursor-pointer'>See All</span>
                </div>


                <div className="card wraper shadow-sm my-8 py-6">
                    <div className="flex">
                        <div className="card-body p-6">
                            <h2 className='text-xl font-bold'>Treatment</h2>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className="text-[#A9A6C1] card-text whitespace-normal">November 2020</p>
                                    <div className='bg-white p-2 py-4 mt-4 rounded-xl'>
                                        <CarouselSect />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="card-body p-6 border-l">


                            <div class="wraper shadow-sm rounded-xl">
                                <div class=" flex p-4 justify-around items-center">
                                    <div className='bg-orange-500 text-white p-2 py-8 text-center rounded-xl'>
                                        <h2 className="text-5xl font-bold">
                                            27
                                        </h2>
                                        <p>November</p>
                                    </div>
                                    <div>
                                        <h2 class="card-title">Medicine</h2>
                                        <p className='text-[#A9A6C1]'>11:30 am</p>
                                        <div class="card-actions justify-end mt-4 ml-6">
                                            <div className='grid grid-cols-2 gap-4'>
                                                <BsFillTelephoneFill className='bg-white rounded-full text-[#67727E] text-4xl p-2' />
                                                <AiFillVideoCamera className='bg-white rounded-full text-[#67727E] text-4xl p-2' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <MdNotificationsNone className='bg-white rounded-full text-blue-400 text-4xl p-2 absolute top-6 right-6' />
        </div>
    );
};

export default AvailableAppoinments;