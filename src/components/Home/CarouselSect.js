import React from 'react';
import { getTreatmentDates } from '../../utilities/getDates';

const CarouselSect = () => {
    const treatmentDates = getTreatmentDates()
    return (
        <div class="carousel w-full ml-2">
            <div id="slide1" class="carousel-item relative w-full">
                <a href="#slide4" class="btn border-white btn-sm bg-white  text-[#A9A6C1] hover:text-white">❮</a>

                <ul className='flex flex-wrap'>
                    {
                        treatmentDates.map(date => <li
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
                <a href="#slide2" class="btn border-white btn-sm bg-white  text-[#A9A6C1] hover:text-white">❯</a>
            </div>
        </div>
    );
};

export default CarouselSect;