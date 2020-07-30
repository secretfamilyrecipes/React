import React, {useContext} from 'react';
import {RecipesContext} from '../utils/RecipesContext';
import {useHistory} from 'react-router-dom';

const Recipes = () =>{
    const {recipes} = useContext(RecipesContext);
    const {push} = useHistory();

    const redirect = () =>{
        return push('/add')
    }

    return (
        <div>
            <div>
                <button onClick={redirect}>Add a Recipe</button>
            </div>
            {recipes.length > 0 && (
                <div>
                    {recipes.map(recipe =>(
                        <div key={recipe.id}>
                            <h3>Title:&nbsp;{recipe.recipeName}</h3>
                            <p>Source:&nbsp;{recipe.recipeSource}</p>
                            {Number(recipe.prepTime) + Number(recipe.cookTime) > 0 && (
                                <p>Total Time:&nbsp;{Number(recipe.prepTime) + Number(recipe.cookTime)} minutes</p>
                            )}
                            <p>Ingredients:&nbsp;{recipe.ingredients}</p>
                            <p>Steps:&nbsp;{recipe.steps}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Recipes;