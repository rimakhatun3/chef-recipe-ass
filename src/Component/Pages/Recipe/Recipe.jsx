import React from 'react';
import ReactStarsRating from 'react-awesome-stars-rating';
const Recipe = ({ recipe }) => {
    console.log(recipe)
    const {recipe_name,recipe_pic,cooking_method,ingredients,rating} = recipe
    return (
        <div>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='h-96 w-full' src={recipe_pic} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p>{cooking_method}</p>
    <div>{ingredients.map(ing=><li className='text-lg font-semibold'>{ing}</li>)}</div>
    <div className='flex justify-between items-center'>
        <div>
        <ReactStarsRating className="w-5 flex text-yellow-600">{rating}</ReactStarsRating>
        </div>
        <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>


    
  </div>
</div>
        </div>
    );
};

export default Recipe;