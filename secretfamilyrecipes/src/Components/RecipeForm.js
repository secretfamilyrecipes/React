import React from "react";

export default function Register(props) {
  // const {
  //   recipeFormErrors,
  //   recipeFormValues,
  //   recipeHandleChange,
  //   submit,
  // } = props;
  // const onSubmit = (evt) => {
  //   evt.preventDefault();
  //   submit();
  // };
  // const onInputChange = (evt) => {
  //   const { name, value } = evt.target;
  //   recipeHandleChange(name, value);
  // };

  const {recipeFormValues, onSubmit, onChange} = props

  return (
    <div className="formContainer">
      <h1>Add a Recipe</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="recipeName">
          Recipe Name:&nbsp;
          <input
            // id="recipeName"
            name="recipeName"
            value={recipeFormValues.recipeName}
            onChange={onChange}
            type="text"
            // placeholder="Recipe Name"
          />
        </label>
        <label htmlFor="=recipeSource">
          Recipe Source:&nbsp;
          <input
            // id="recipeSource"
            name="recipeSource"
            value={recipeFormValues.recipeSource}
            onChange={onChange}
            type="text"
            // placeholder="Recipe Source"
          />
        </label>
        <label htmlFor="prepTime">
          Preparation Time:&nbsp;
          <input
            // id="prepTime"
            name="prepTime"
            value={recipeFormValues.prepTime}
            onChange={onChange}
            type="text"
            // placeholder="Prep Time"
          />
        </label>
        <label>Cook Time:&nbsp;
          <input
            // id='cookTime'
            name='cookTime'
            value={recipeFormValues.cookTime}
            onChange={onChange}
            type='text'
            // placeholder='Cook Time'
          />
        </label>
        <label htmlFor="ingredients">
          Ingredients:&nbsp;
          <input
            // id="ingredients"
            name="ingredients"
            value={recipeFormValues.ingredients}
            onChange={onChange}
            type="text"
            // placeholder="Ingredients"
          />
        </label>
        <label htmlFor="directions">
          Directions:&nbsp;
          <input
            // id="directions"
            name="directions"
            value={recipeFormValues.directions}
            onChange={onChange}
            type="text"
            // placeholder="Directions"
          />
        </label>

        <button> Add Recipe </button>
        {/* <div className="errors">
          <div>{recipeFormErrors.recipeName}</div>
          <div>{recipeFormErrors.recipeSource}</div>
          <div>{recipeFormErrors.prepTime}</div>
          <div>{recipeFormErrors.cookTime}</div>
          <div>{recipeFormErrors.ingredients}</div>
          <div>{recipeFormErrors.directions}</div>
        </div> */}
      </form>
    </div>
  );
}
