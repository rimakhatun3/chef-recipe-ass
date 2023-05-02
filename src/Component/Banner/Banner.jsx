import React from 'react';
import banner1 from '../../assets/images/banner1.avif'
import banner2 from '../../assets/images/banner2.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import chef1 from '../../assets/images/chefimg1.avif'
import chef2 from '../../assets/images/chef3.avif'
import chef3 from '../../assets/images/chef4.avif'
const Banner = () => {
    return (
     <div className='relative top-0 '>
           <div className="carousel opacity-80 w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
 
</div>

<div className='grid lg:grid-cols-2 gap-x-10 mt-20 sm:mb-32 absolute top-0 text-center'>
<div className='  text-white px-5 '>
<h1 className='text-3xl font-extrabold'>this is food Recepes </h1>
<p>other’s Recipe  Restaurant and Food HTML Template is developed specially for restaurant based service. this template has beautiful and unique design that will be best suited for your online web presence. It will be suitable for restaurant. It will also be suitable for any kind of professional cafe template.  The Mother’s Rescipe is scalable and more options & updates will be available in future based on buyers’ request. We are really glad to introduce you Mother’s Rescipe. Thanks</p>
</div>

<div >
{/* <Swiper
      spaceBetween={15}

      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='sm:w-full'  src={chef1} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={chef2} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={chef3} alt="" /></SwiperSlide>
      
      <SwiperSlide><img  src={chef2} alt="" /></SwiperSlide>
      <SwiperSlide><img  src={chef3} alt="" /></SwiperSlide>
      
     
    </Swiper> */}
    <img src={chef3} alt="" />
    {/* <div className="carousel opacity-80 w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={chef1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={chef2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={chef3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
   
 
</div> */}
</div>
</div>
     </div>
    );
};

export default Banner;