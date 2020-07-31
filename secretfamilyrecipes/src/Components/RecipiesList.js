//royer adames
import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'

export default function RecipiesList({ recipes,  redirect}) {
    // function unpackAllRecipes() {
    //     let unpackRecipes
    //     const thereIsRecipies = recipes.length > 0
    //     if (thereIsRecipies) {
    //         unpackRecipes = recipes.map(recipe => {
    //             debugger
    //              return (<Card.Group centered>
    //                 <Card color='orange' onClick='move to content page'>
    //                     <Card.Content>
    //                         <Card.Header><Icon name='book' />Title</Card.Header>
    //                         <Card.Description>
                                
    //                         </Card.Description>
    //                     </Card.Content>
    //                     <Card.Content extra>
    //                         <Icon name='food' />10 Steps
    //                     </Card.Content>
    //                 </Card>

    //             </Card.Group>)
    //         })
    //     }
    //     return unpackRecipes
    // }
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
                            <p>Steps:&nbsp;{recipe.directions}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
//royer adames

//Shanon Fritz code
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
//Shanon Fritz code

//royer adames
{/* <List as='ol'>
                                    <List.Item as='li' value='*'>
                                        Total Time:
                            </List.Item>
                                    <List.Item as='li' value='*'>
                                        Total Incrediants
                            </List.Item>
                                    <List.Item as='li' value='*'>
                                        Total Steps
                            </List.Item>
                                </List> */}
//royer adames
