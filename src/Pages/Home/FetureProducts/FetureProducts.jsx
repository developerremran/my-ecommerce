import React from 'react';
import CardF from './CardF';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
import TitleBox from '../../../ShearSection/TItle/TitleBox';
import UseProductsGet from '../../../API/UseProductsGet';





const FetureProducts = () => {
    const [products, refetch] = UseProductsGet();

    return (

        <div className='mt-28'>
             <TitleBox title={'FEATURED PRODUCTS'}>
             </TitleBox>
           <div className='py-20'>
           <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                grabCursor={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <div className='flex gap-10 mt-20'>
                    {
                        products.map(product => <SwiperSlide key={product._id}>  <CardF product={product}></CardF>  </SwiperSlide>)
                    }
                </div>


            </Swiper>
           </div>

        </div>
    );
};

export default FetureProducts;