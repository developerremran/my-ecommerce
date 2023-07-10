import React from 'react';


import banner1 from '../../Image/BannerImg/banner.png'
import banner2 from '../../Image/BannerImg/banner2.jpg'
 

const Banner = () => {
    return (
        <div>
            <div className="grid grid-rows-1 grid-flow-col gap-4">
                <div className="col-span-2 bg-green-300 h-[500px] relative">
                    {/* first  */}
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={banner1} className="w-full h-[500px] bg-cover" />

                            <div className='absolute bottom-1/2 right-1/4 top-1/3 '>
                                <div className='text-center space-y-8'>
                                    <h2 className='text-5xl font-bold  w-[500px]  '>Now Arrival In the Shop</h2>
                                    <button className="btn bg-orange-700 text-white hover:text-black">Browser</button>

                                </div>
                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full bg-[#6F767C]">
                            <img src={banner2} className="w-full h-[500px] bg-cover" />

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={banner1} className="w-full h-[500px] bg-cover" />
                            <div className='absolute bottom-1/2 right-1/4 top-1/3 '>
                                <div className='text-center space-y-8'>
                                    <h2 className='text-5xl font-bold  w-[500px]  '>Now Arrival In the Shop</h2>
                                    <button className="btn bg-orange-700 text-white hover:text-black">Browser</button>

                                </div>
                            </div>

                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full bg-[#6F767C]">
                            <img src={banner2} className="w-full h-[500px] bg-cover" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;