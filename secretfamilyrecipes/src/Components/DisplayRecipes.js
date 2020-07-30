import React, { useContext, useEffect } from 'react'
import { RecipesContext } from '../utils/RecipesContext'
import { useHistory } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon } from 'semantic-ui-react'


export default function DisplayRecipes() {
    //Shanon Fritz code
    const { recipes } = useContext(RecipesContext)
    const { push } = useHistory()

    const redirect = () => {
        return push('/add')
    }
    //Shanon Fritz code

    //royer code
    const description = [
        <div className='description-container'>
            <h2>Title</h2>
            <ul>
                <li>Test</li>
            </ul>
        </div>
    ].join(' ')


    return (
        <Card.Group centered>
        <Card fluid color='orange' onClick='move to content page'>
            <Card.Content>
                <Card.Header><Icon name='book' />Title</Card.Header>
                <Card.Description>
                    <ul>
                        <li>Description: </li>
                        <li>Total time: </li>
                        <li>Incrediants: </li>
                    </ul>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='food' />10 Steps
            </Card.Content>
        </Card>

        </Card.Group>
        //royer code

        /*
        <div>
            <div>
                <button onClick={redirect}>Add a Recipe</button>
            </div>
            {recipes.length > 0 && (
                <div>
                    {recipes.map(recipe =>(
                        <div key={recipe.id}>
                            <h3>Title:&nbsp{recipe.recipeName}</h3>
                            <p>Source:&nbsp{recipe.recipeSource}</p>
                            {Number(recipe.prepTime) + Number(recipe.cookTime) > 0 && (
                                <p>Total Time:&nbsp{Number(recipe.prepTime) + Number(recipe.cookTime)} minutes</p>
                            )}
                            <p>Ingredients:&nbsp{recipe.ingredients}</p>
                            <p>Steps:&nbsp{recipe.directions}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
        */
    )
}

