import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({singleData}) => {
    console.log(singleData)
    const{name,image,number_of_recepe,experience,id} = singleData
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={image} alt="Shoes" className="rounded-xl h-96" />
  </figure>
  <div className="card-body items-center text-center">
   <p>{name}</p>
    <p>{experience}</p>
    <p>{number_of_recepe}</p>
    <div className="card-actions">
    <Link to={`/recepeDetails/${id}`}>  <button className="btn btn-primary">view Recece Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ChefCard;