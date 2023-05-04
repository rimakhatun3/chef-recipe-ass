
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Recipe from '../Recipe/Recipe';
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from 'react-lazy-load';
const RecepeDetails = () => {
    
    const datas = useLoaderData()
    console.log(datas)
    const recipes = datas.recipes
    console.log(recipes)
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            {
                id && <div className='mt-10 lg:px-16'>
                    <h1 className='text-4xl text-center font-bold'>All Recipe Details</h1>
                   {
                    <div className="card card-side bg-base-100 shadow-xl mt-16">
<LazyLoad><figure><img   src={datas.image} alt="Movie"/></figure></LazyLoad>                   
                    <div className="card-body ">
                      <h2 className="card-title">{datas.name}</h2>
                      <p> <span className=' font-bold text-orange-500'>Experience</span>: {datas.experience}</p>
    <p> <span className=' font-bold text-orange-500'>Number of Recipe</span>: {datas.number_of_recepe}</p>
    <p>{datas.description}</p>
    <div className='flex justify-between'>
    <div className='flex gap-2 items-center justify-center'>
      <FaThumbsUp className='text-blue-500'></FaThumbsUp>
      {datas.Likes}
      
    
    </div>
      
    <div className='flex justify-center items-center'>
        <Rating
      style={{ maxWidth: 100 }}
      value={Math.round(datas.rating)}
      readOnly
    />
    <span className='ml-2'>{datas.rating}</span>
        </div> 
    </div>
                     
                    </div>
                     
                  </div>
                   }
                     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10 '>
                {recipes.map(recipe=><Recipe key={recipe.id} recipe={recipe}></Recipe>)}
                
                </div>
                </div>
            }
            
        </div>
    );
};

export default RecepeDetails;