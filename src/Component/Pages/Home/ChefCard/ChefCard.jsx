import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp,FaHeart } from "react-icons/fa";
const ChefCard = ({singleData}) => {
    // console.log(singleData)
    const{name,image,number_of_recepe,experience,id,description,Likes} = singleData
    return (
        <div >
           <div className="card w-96 h-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl h-96" />
  </figure>
  <div className="card-body items-start ">
   <p><span className=' font-bold text-orange-500'>Name</span>:{name}</p>
    <p> <span className=' font-bold text-orange-500'>Experience</span>: {experience}</p>
    <p> <span className=' font-bold text-orange-500'>Number of Recipe</span>: {number_of_recepe}</p>
    <p>{description}</p>

   <div className='flex items-center gap-x-44'>
   <div className='flex gap-2 items-center justify-center'>
      <FaThumbsUp className='text-blue-500'></FaThumbsUp>
      {Likes}
    
    </div>
    <div className='flex gap-2'>
      <FaHeart className='text-red-600'></FaHeart>
      <FaHeart className='text-red-600'></FaHeart>
      <FaHeart className='text-red-600'></FaHeart>
    </div>
   </div>
    <div className="card-actions">
    <Link to={`/recepeDetails/${id}`}>  <button className="btn btn-primary">view Recece Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;