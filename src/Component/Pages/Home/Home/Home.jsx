import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import './home.css'


import chef3 from '../../../../assets/images/chef3.avif'
const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('https://chef-recepe-hunter-server1.vercel.app/chef')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
      <div>
       <section className=' mb-10 bg-slate-100  '> <div  >
            <div  className=' lg:mx-12'>
<div className='grid lg:grid-cols-2 gap-x-10   text-center'>
<div className='   px-5 mt-20 '>

<div className="carousel opacity-80 my-10 w-full ">
  <div id="slide1" className="carousel-item relative w-full">
  <p>other’s Recipe  Restaurant and Food HTML Template is developed specially for restaurant based service. this template has beautiful and unique design that will be best suited for your online web presence. It will be suitable for restaurant. It will also be suitable for any kind of professional cafe template.  The Mother’s Rescipe is scalable and more options & updates will be available in future based on buyers’ request. We are really glad to introduce you Mother’s Rescipe. Thanks</p>    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <p>other’s Recipe  Restaurant and Food HTML Template is developed specially for restaurant based service. this template has beautiful and unique design that will be best suited for your online web presence. It will be suitable for restaurant. It will also be suitable for any kind of professional cafe template.  The Mother’s Rescipe is scalable and more options & updates will be available in future based on buyers’ request. We are really glad to introduce you Mother’s Rescipe. Thanks</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
   
<p>other’s Recipe  Restaurant and Food HTML Template is developed specially for restaurant based service. this template has beautiful and unique design that will be best suited for your online web presence. It will be suitable for restaurant. It will also be suitable for any kind of professional cafe template.  The Mother’s Rescipe is scalable and more options & updates will be available in future based on buyers’ request. We are really glad to introduce you Mother’s Rescipe. Thanks</p>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
   </div>
</div>
<div className='mt-12'><img src={chef3} alt="" /></div>
 
</div>
</div>
            </div></section>
          <section className='mt-10 sm:mb-32 '><div >
            <h1 className='text-5xl my-8 font-extrabold text-center ' >All Chef Information</h1>
          <div className='grid lg:grid-cols-3 gap-5 lg:mx-16 lg:mt-11  '>
           {
data.map(singleData=><ChefCard key={singleData.id} singleData={singleData}></ChefCard>)
            }
           </div>
          </div></section>
          
          
        </div>
    );
};

export default Home;