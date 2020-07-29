import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Link, Route } from "react-router-dom";
// import "./App.css";
import Login from "./Components/Login";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import Register from "./Components/Register";
import {dummydata} from './utils/dummydata';
import {RecipesContext} from './utils/RecipesContext';
import Recipes from './Components/RecipesList';

const data = dummydata;

const initialLoginFormValues = {
  username: "",
  password: "",
};
const initialRegisterFormValues = {
  fname: "",
  lname: "",
  username: "",
  email: "",
  password: "",
  termsOfService: false,
};
const initialRecipeFormValues = {
  recipeName: "",
  recipeSource: "",
  prepTime: "",
  cookTime: "",
  ingredients: "",
  directions: "",
};
const registerErrorValues = {
  username: "",
  password: "",
};
const initialRecipeErrorValues ={
  recipeName: "",
  recipeSource: "",
  prepTime: "",
  cookTime: "",
  ingredients: "",
  directions: "",
};
const initialUsers = [];
const initialRecipes = [];

const formSchema = yup.object().shape({
  recipeName: yup
    .string()
    .required("Recipe Name is Required")
    .min(2, "Must be at least 2 characters long"),
  recipeSource: yup
    .string()
    .required("Recipe Source is Required")
    .min(2, "Must be at least 2 characters long"),
  // prepTime: yup
  //   .string()   
  //   .min(2, "Must be at least 2 characters long"),
  // cookTime: yup
  //   .string()
  //   .min(2, "Must be at least 2 characters long"),
});

function App() {
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );
  const [registerFormErrors, setFormErrors] = useState(registerErrorValues);
  const [users, setUsers] = useState(initialUsers);

  const [recipeFormValues, setRecipeFormValues] = useState(initialRecipeFormValues);
  const [recipeErrorValues, setRecipeErrorValues] = useState(initialRecipeErrorValues);
  const [recipes, setRecipes] = useState(initialRecipes);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data], ...users);
        setRegisterFormValues(initialRegisterFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postNewRecipe = (newRecipe) => {
    axios
      .post("noidea", newRecipe)
      .then((res) => {
        setUsers([res.data], ...recipes);
        setRegisterFormValues(initialRecipeFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...registerFormErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...registerFormErrors, [name]: err.errors[0] });
      });
    setRegisterFormValues({ ...registerFormValues, [name]: value });
  };
  const checkboxChange = (name, isChecked) => {
    setRegisterFormValues({ ...registerFormValues, [name]: isChecked });
  };
  const submit = () => {
    const newUser = {
      fname: registerFormValues.fname.trim(),
      lname: registerFormValues.lname.trim(),
      username: registerFormValues.username.trim(),
      email: registerFormValues.email.trim(),
      password: registerFormValues.password,
      termsOfService: registerFormValues.termsOfService,
    };
    postNewUser(newUser);
  };
  const validateRecipe = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setRecipeErrorValues({...recipeErrorValues, [e.target.name]: ""}))
      .catch(err => setRecipeErrorValues({...recipeErrorValues, [e.target.name]: err.errors[0]}))
  }
  setRecipeFormValues({ ...recipeFormValues, [e.target.name]: e.target.value});
};
  const submitNewRecipe = () => {
    const newRecipe = {
      recipeName: recipeFormValues.recipeName.trim(),
      recipeSource: recipeFormValues.recipeSource.trim(),
      prepTime: recipeFormValues.prepTime.trim(),
      cookTime: recipeFormValues.cookTime.trim(),
      ingredients: recipeFormValues.ingredients.trim(),
      directions: recipeFormValues.directions.trim(),
    }
    postNewRecipe(newRecipe)
  }

  return (
    <div className="App">
      <Route exact path="/">
        <Login />
        <p>
          Don't have an account? <Link to="/register">Click here</Link> to
          create a new account.
        </p>
      </Route>

      <Route exact path="/register">
        <Register
          registerFormErrors={registerFormErrors}
          registerFormValues={registerFormValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
        />
        <p>
          Already have an account? <Link to="/">Click here</Link> to sign in.
        </p>
      </Route>
      <RecipesContext.Provider value={{data}}>
        <Route exact path='/recipes'>
          <Recipes/>
        </Route>
      </RecipesContext.Provider>
      <Recipe 
        recipeFormErrors={recipeFormErrors}
        recipeFormValues={recipeFormValues}
        validateRecipe={validateRecipe}
        submit={submit}
      />
    </div>
  );
}

export default App;
