import React, {useContext} from 'react';
import {RecipesContext} from '../utils/RecipesContext';

const Recipes = () =>{
    const {data} = useContext(RecipesContext);

    return (
        <div>
            {data.length > 0 && (
                <div>
                    {data.map(recipes =>(
                        <div>
                            <h3>Title:&nbsp;{recipes.title}</h3>
                            <p>Source:&nbsp;{recipes.source}</p>
                            {recipes.preptime + recipes.cooktime > 0 && (
                                <p>Total Time:&nbsp;{recipes.preptime + recipes.cooktime} minutes</p>
                            )}
                            <p>Ingredients:&nbsp;{recipes.ingredients.length}</p>
                            <p>Steps:&nbsp;{recipes.steps.length}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Recipes;