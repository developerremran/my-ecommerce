import { Swiper, SwiperSlide } from 'swiper/react';


import banner4 from '../../Image/BannerImg/banner4.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const showDiv=true
const Slide = () => {
    return (
        <div className='mt-10'>

            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >


              
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-[300px]"
                            src={banner4}
                            alt=""
                            style={{ transform: 'scale(1)', transition: 'transform 0.3s', filter: 'blur(0)' }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1)';
                                e.currentTarget.style.filter = 'blur(4px)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.filter = 'blur(0)';
                            }}
                        />

                        {showDiv && (
                            <div className='absolute bottom-0 right-1/3 top-1/2 hover:block'>
                                <h2 className='bg-red-500 p-2 rounded-md text-white'>Coming Soon..</h2>
                            </div>
                        )}
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>
    );
};

export default Slide;