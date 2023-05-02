import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecepeDetails = () => {
    const datas = useLoaderData()
    console.log(datas)
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            {
                id && <div>
                   <div className="container card w-full mt-11  ">
  <figure><img className=' w-full mx-12' src={datas.image} alt="car!"/></figure>
  <div className="card-body mx-12">
    <h2 className="card-title">Chef Name:{datas.name}</h2>
    <p>{datas.description}</p>
    <div className="card-actions justify-center mt-5">
      <button className="btn btn-primary">Favorite Button</button>
    </div>
  </div>
</div>
                </div>
            }
        </div>
    );
};

export default RecepeDetails;