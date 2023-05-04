import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';

import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Recipe = ({ recipe }) => {

  console.log(recipe)
    const [disable, setDisable] =useState(false)
    console.log(recipe)
    const {recipe_name,recipe_pic,cooking_method,ingredients,rating} = recipe
    return (
        <div>

<div className="card w-96  bg-base-100 shadow-xl">
  <LazyLoad><figure><img className='h-96 w-full' src={recipe_pic} alt="Shoes" /></figure></LazyLoad>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{cooking_method}</p>
    <div>Indigredien:{ingredients.map(ing=><li className='text-lg font-semibold'>{ing}</li>)}</div>
    <div className='flex justify-between items-center'>
        
        <div className="card-actions justify-center">
      <button onClick={()=>setDisable(toast('wow add faviratite'))} disabled={disable} className="btn btn-secondary">Favorite</button>
    </div>
    <ToastContainer/>
    </div>


    
  </div>
</div>
        </div>
    );
};

export default Recipe;