import React, {useState} from "react";

export default function Register(props) {
  const {
    recipeErrorValues,
    recipeFormValues,
    validateRecipe,
    submit,
  } = props;
  const initialInstructions = []
  const [instructionItems, setInstructionItems] = useState(initialInstructions)

  const initialIngredients = []
  const [ingredientItems, setIngredientItems] = useState(initialIngredients)
  
  const addStep = (e) => setInstructionItems([...instructionItems, e.target.value])
  const addIng = (e) => setIngredientItems([...ingredientItems, e.target.value])

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    validateRecipe(name, value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="recipeName">
        Recipe Name:
        <input
          id="recipeName"
          name="recipeName"
          value={recipeFormValues.recipeName}
          onChange={onInputChange}
          type="text"
          placeholder="Recipe Name"
        />
      </label>
      <label htmlFor="=recipeSource">
        Recipe Source:
        <input
          id="recipeSource"
          name="recipeSource"
          value={recipeFormValues.recipeSource}
          onChange={onInputChange}
          type="text"
          placeholder="Recipe Source"
        />
      </label>
      <label htmlFor="prepTime">
        Preparation Time:
        <input
          id="prepTime"
          name="prepTime"
          value={recipeFormValues.prepTime}
          onChange={onInputChange}
          type="text"
          placeholder="Prep Time"
        />
      </label>
      <label htmlFor="ingredients">
        Ingredients:
        <input
          id="ingredients"
          name="ingredients"
          value={recipeFormValues.ingredients}
          onChange={onInputChange}
          type="text"
          placeholder="Ingredients"
        />
        <button onClick={addIng}>Add Ingredient</button>
        </label>
        <div>
          {ingredientItems.map(ingredient => (<div>{ingredient}</div>))}
        </div>
      <label htmlFor="steps">
        Steps:
        <input
          id="steps"
          name="steps"
          value={recipeFormValues.steps}
          onChange={onInputChange}
          type="text"
          placeholder="Steps"
        />
        <button onClick={addStep}>Add Step</button>
      </label>
      <div>
        {instructionItems.map(instruction => (<div>{instruction}</div>))}
      </div>
      <button> Add Recipe </button>
      <div className="errors">
        <div>{recipeErrorValues.recipeName}</div>
        <div>{recipeErrorValues.recipeSource}</div>
        <div>{recipeErrorValues.prepTime}</div>
        <div>{recipeErrorValues.cookTime}</div>
        <div>{recipeErrorValues.ingredients}</div>
        <div>{recipeErrorValues.directions}</div>
      </div>
    </form>
  );
}
