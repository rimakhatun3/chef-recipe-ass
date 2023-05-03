import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './home.css'

import 'swiper/css';
import chef1 from '../../../../assets/images/bg5.jpeg'
import chef2 from '../../../../assets/images/chefimg1.avif'
import chef3 from '../../../../assets/images/chef3.avif'


const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div >
            <div className='bg-home bg-slate-500  opacity-70 '>
<div className='grid lg:grid-cols-2 gap-x-10   text-center'>
<div className='   px-5  '>
<h1 className='text-3xl font-extrabold mt-10 text-green-950'>this is food Recepes </h1>
<p>other’s Recipe  Restaurant and Food HTML Template is developed specially for restaurant based service. this template has beautiful and unique design that will be best suited for your online web presence. It will be suitable for restaurant. It will also be suitable for any kind of professional cafe template.  The Mother’s Rescipe is scalable and more options & updates will be available in future based on buyers’ request. We are really glad to introduce you Mother’s Rescipe. Thanks</p>
</div>
<div className="carousel opacity-80 my-10 w-full ">
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
   
 
</div>
</div>
            </div>
          <div>
            <h1 className='text-5xl font-extrabold text-center mt-14' >All Chef Information</h1>
          <div className='grid lg:grid-cols-3 gap-5 lg:mx-16 lg:mt-11 sm:mt-96 '>
           {
data.map(singleData=><ChefCard key={singleData.id} singleData={singleData}></ChefCard>)
            }
           </div>
          </div>
          
          
        </div>
    );
};

export default Home;