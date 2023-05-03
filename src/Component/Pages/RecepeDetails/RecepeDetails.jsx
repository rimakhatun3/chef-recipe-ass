import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecepeDetails = () => {
    const datas = useLoaderData()
    const recipes = datas.recipes
    console.log(recipes)
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            {
                id && <div className='mt-10 lg:px-16'>
                    <h1 className='text-4xl text-center font-bold'>All Recipe Details</h1>
                     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 '>
                {recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)}
                
                </div>
                </div>
            }
        </div>
    );
};

export default RecepeDetails;