import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Slide = () => {

    return (
        <div className=' mx-auto w-full px-5 md:mt-0 sm:pt-4 pt-6 relative'>
            <style>
                {`
          .swiper-pagination-bullet {
            background-color: #1f2937;
            padding: 3px;
            border: 2px solid #1f2937;
            opacity: 1;
            width: 7px;
            height: 7px; 
          }
          .swiper-pagination-bullet-active {
            width: 12px;
            height: 12px;
            background-color:#FF0000;
            border: 1px solid #FF0000;
            padding: 2px;
            border-radius: 50%;
            background-clip: content-box;
          }
        `}
            </style>
            <div className="absolute md:top-52 sm:top-40 top-35 left-0 right-0 z-10  flex justify-center py-4 flex-col-reverse items-center ">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-3/4 md:w-1/2 lg:w-1/3 px-4 py-2 border rounded-lg focus:outline-none shadow-2xl shadow-black "
                />
                <p className="md:text-2xl sm:text-xl text-sm py-2 font-semibold text-white">Search the catogory</p>
            </div>
            <Swiper className="mySwiper xl:h-[75vh] lg:h-[70vh] md:h-[60vh] sm:h-[55vh] h-[40vh] xl:rounded-[32px] md:rounded-[28px] sm:rounded-[24px] rounded-2xl w-full flex items-center justify-center " pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                loop={true}
                data-swiper-autoplay="40000">
                <SwiperSlide><img src="/burger.png" alt="" className="object-contain" /></SwiperSlide>
                <SwiperSlide><img src="/pizza.png" alt="" className=" object-contain" /></SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Slide