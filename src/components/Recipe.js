import React from 'react';
import './Recipe.css';
import RecipeCard from './RecipeCard';

const Recipe = ({recipes}) => {
    return(
        <div className='recipe-container'>
            {
                recipes.map((recipe, index) => <RecipeCard key={index} recipe={recipe.recipe}/>)
            }
        </div>
    )
}

export default Recipe;