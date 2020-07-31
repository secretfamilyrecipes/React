import React, { useState } from "react";
import Styled from 'styled-components'
import {  Icon } from 'semantic-ui-react'

const Styles = Styled.div`
  /* royer adames */
    /* general styles */
    font-family: "Akronim", cursive;
    letter-spacing: 1rem;
    .icon{
      color:white;
    }
    .food{
      display:inline;
    }
    .title-container{
      border: .1rem solid white;
    }
    .title{
    font-size: 6rem;
    font-family: "Akronim", cursive;
  }

    /* Container */
    .container{
      width: 80%;
      margin-top: 2rem;

      :nth-of-type(1n+3){
        border-top: .1rem solid white;
      }

      :last-of-type{
        border-bottom: .1rem solid white;
      }
    }
    
    
    /* styles for the labels */
    [for="recipeName"],[for="recipeSource"], [for="prepTime"], [for="ingredients"],[for="steps"]
    {
      padding: 4rem;
      font-size: 5rem;
      display:inline-block;
    }

    /* Styles for the inputs */
    [name="recipeName"],
    [name="recipeSource"],
    [name="prepTime"],
    [name="ingredients"],
    [name="steps"]
    {
      padding: 2rem;
      padding-left: 4rem;
      color: #1799B5;
    }
    input::placeholder{
      color: rgba(23, 153, 181, 30%);
    font-family: "Akronim", cursive;
    letter-spacing: .5rem;

    }

    /* btn */
    .btn-container{
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }
    .btn{
      margin-top: .5rem;
      padding: 1rem;
      color: white;
      letter-spacing: .5rem;
      border: .1rem solid white;

      :last-of-type{
      margin-bottom: 1rem;
    }
    }
    
    .submit{
      width: 80%;
      padding: 2rem 0;
      margin-top: 5rem;
    }
    .submit-text{
      display:inline;
    }
  /* royer adames */
`
export default function Register(props) {
  const {
    recipeErrorValues,
    recipeFormValues,
    validateRecipe,
    submit,
    onSubmit,
    onChange
  } = props;
  const initialInstructions = []
  const [instructionItems, setInstructionItems] = useState(initialInstructions)

  const initialIngredients = []
  const [ingredientItems, setIngredientItems] = useState(initialIngredients)

  const addStep = (e) => setInstructionItems([...instructionItems, e.target.value])
  const addIng = (e) => setIngredientItems([...ingredientItems, e.target.value])

  // const onSubmit = (evt) => {
  //   evt.preventDefault();
  //   submit();
  // };
  // const onInputChange = (evt) => {
  //   const { name, value } = evt.target;
  //   validateRecipe(name, value);
  // };
  return (
    <Styles>
      <form onSubmit={onSubmit}>
        <div class="container title-container">
          <h1 className='title'><Icon name='book' />New recipe</h1>
        </div>
        {/* Recipe name */}
        <div className='recipe-name-container container'>
          <div className='recipe-name-heading heading'>
            <label htmlFor="recipeName">
              Recipe Name
            </label>
          </div>
          <div className='recipe-name-input input'>
            <input
              id="recipeName"
              name="recipeName"
              value={recipeFormValues.recipeName}
              onChange={onChange}
              type="text"
              placeholder="Recipe Name"
            />
          </div>
        </div>
        {/* Recipe Source */}
        <div className='recipe-source-container container'>
          <div className="recipe-source-heading heading">
            <label htmlFor="recipeSource">Recipe Source </label>
          </div>
          <div className="recipe-source-input input">
            <input
              id="recipeSource"
              name="recipeSource"
              value={recipeFormValues.recipeSource}
              onChange={onChange}
              type="text"
              placeholder="Recipe Source"
            />
          </div>
        </div>
        {/* Preparation time */}
        <div className="recipe-preparation-container container">
          <div className="recipe-preparation-heading heading">
            <label htmlFor="prepTime">
              Preparation Time
            </label>
          </div>
          <div className="recipe-preparation-input input">
            <input
              id="prepTime"
              name="prepTime"
              value={recipeFormValues.prepTime}
              onChange={onChange}
              type="text"
              placeholder="Prep Time"
            />
          </div>
        </div>
        {/* Ingredients */}
        <div className='recipe-ingredients-container container'>
          <div class="recipe-ingredients-heading heading">
            <label htmlFor="ingredients">
              Ingredients
            </label>
          </div>
          <div class="recipe-ingredients-input input">
            <input
              id="ingredients"
              name="ingredients"
              value={recipeFormValues.ingredients}
              onChange={onChange}
              type="text"
              placeholder="Ingredients"
            />
          </div>
          <div class="recipe-ingredients-btn-container btn-container">
            <button className='btn' onClick={addIng}><span className='submit-text'><Icon name='add' />Add Ingredient</span></button>
          </div>
          <div className='recipe-ingredient-items'>
            {ingredientItems.map(ingredient => (<div>{ingredient}</div>))}
          </div>
        </div>
        {/* steps */}
        <div className='recipe-steps-contianer container'>
          <div class="recipe-steps-heading heading">
            <label htmlFor="steps">Steps</label>
          </div>
          <div class="recipe-steps-input input">
            <input
              id="steps"
              name="steps"
              value={recipeFormValues.steps}
              onChange={onChange}
              type="text"
              placeholder="Steps"
            />
          </div>
          <div class="recipe-steps-btn-container btn-container">
            <button className='btn' onClick={addStep}><span className='submit-text'><Icon name='add' />Add Step</span> </button>
          </div>
          <div className='instruction-items'>
            {instructionItems.map(instruction => (<div>{instruction}</div>))}
          </div>
        </div>
        {/* submit button */}
        <button type='submit' className='btn submit' Icon='food'> <span className='submit-text'><Icon name='food' />Add Recipe<Icon name='food' /></span> </button>
        {/* <div className="errors">
        <div>{recipeErrorValues.recipeName}</div>
        <div>{recipeErrorValues.recipeSource}</div>
        <div>{recipeErrorValues.prepTime}</div>
        <div>{recipeErrorValues.cookTime}</div>
        <div>{recipeErrorValues.ingredients}</div>
        <div>{recipeErrorValues.directions}</div>
      </div> */}
      </form>
    </Styles>
  );
};