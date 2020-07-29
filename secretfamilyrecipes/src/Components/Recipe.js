import React from "react";

export default function Register(props) {
  const {
    recipeFormErrors,
    recipeFormValues,
    validateRecipe,
    submit,
  } = props;
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
      <label htmlFor="cookTime">
        Cooking Time:
        <input
          id="cookTime"
          name="cookTime"
          value={recipeFormValues.cookTime}
          onChange={onInputChange}
          type="cookTime"
          placeholder="Cooking Time"
        />
      </label>
      {/* <label htmlFor="password">
        Password:
        <input
          id="password"
          name="password"
          value={recipeFormValues.password}
          onChange={onInputChange}
          type="password"
          placeholder="Password"
        />
      </label> */}

      <button> Add Recipe </button>
      <div className="errors">
        <div>{recipeFormErrors.recipeName}</div>
        <div>{recipeFormErrors.recipeSource}</div>
        <div>{recipeFormErrors.prepTime}</div>
        <div>{recipeFormErrors.cookTime}</div>
      </div>
    </form>
  );
}
