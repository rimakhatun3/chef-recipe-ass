import React, { useEffect, useState } from 'react';
import Banner from '../../../Banner/Banner';
import ChefCard from '../ChefCard/ChefCard';

const Home = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div className='relative'>
            <Banner></Banner>
           <div className='grid lg:grid-cols-3 gap-5 lg:mt-11 sm:mt-80'>
           {
data.map(singleData=><ChefCard key={singleData.id} singleData={singleData}></ChefCard>)
            }
           </div>
          
          <div>

          </div>
        </div>
    );
};

export default Home;