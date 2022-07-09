import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({recipe : {label, ingredients, calories, image, url}}) => {
    return(
        <div className='recipe-card'>
           <h2>{label}</h2>
           <h3>Ingredients:</h3>
           { 
            <ol>
            {
                ingredients.map((ingredient) => <li>{ingredient.text}</li>)
            }
           </ol> 
           }
           <p>{calories}</p>
           <img src={image}></img>
           <a className='button' href={url} target='_blank'>Visit site</a>
        </div>
    )
}

export default RecipeCard;