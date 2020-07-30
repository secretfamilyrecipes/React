import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import Register from "./Components/Register";
import styled from "styled-components";
import { dummydata } from "./utils/dummydata";
import { RecipesContext } from "./utils/RecipesContext";
import Recipes from "./Components/RecipesList";
import RecipeForm from "./Components/RecipeForm";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./Components/PrivateRoute";
import { v4 as uuid } from "uuid";

const data = dummydata;
const AppStyle = styled.div`
  text-align: center;
  /* background: #dfce9d; */
  .afterForm {
    font-size: 3rem;
  }
  .formContainer {
    h1 {
      font-size: 7rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 1% auto;
    background: #1799b5;
    padding: 1% 0;
    border-radius: 10px;
    box-shadow: 10px 10px 5px grey;
    .errors {
      color: white;
    }
    input {
      height: 3vh;
      /* background: black;
      color: white; */
      border: 1px solid black;
      border-radius: 5px;
    }
    span {
      font-size: 3rem;
      color: white;
    }
    label {
      font-size: 3rem;
      color: white;
    }
    button {
      padding: 1%;
      background: #e25822;
      border-radius: 10px;
      color: gainsboro;
    }
  }
  .clickHere {
    display: inline;
    text-decoration: none;
  }
`;

const initialLoginFormValues = {
  email: "",
  password: "",
};
const initialRegisterFormValues = {
  // fname: "",
  // lname: "",
  username: "",
  email: "",
  password: "",
  // termsOfService: false,
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
  email: "",
};
const initialRecipeErrorValues = {
  recipeName: "",
  recipeSource: "",
  prepTime: "",
  cookTime: "",
  ingredients: "",
  directions: "",
};
const initialUsers = [];

const initialRecipes = [];

const recipeFormSchema = yup.object().shape({
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

const initialDisabled = true;

function App() {
  // const [loginFormValues, setLoginFormValues] = useState(
  //   initialLoginFormValues
  // );
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );
  const [registerFormErrors, setFormErrors] = useState(registerErrorValues);
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [login, setLogin] = useState(initialLoginFormValues);

  const [recipeFormValues, setRecipeFormValues] = useState(
    initialRecipeFormValues
  );
  const [recipeErrorValues, setRecipeErrorValues] = useState(
    initialRecipeErrorValues
  );
  const [recipes, setRecipes] = useState(initialRecipes);
  console.log(recipes);

  //Shanon Start
  const { push } = useHistory();
  //Shanon End

  // Sam Start
  // const postNewUser = (newUser) => {
  //   axios
  //     .post("https://reqres.in/api/users", newUser)
  //     .then((res) => {
  //       setUsers([res.data], ...users);
  //       setRegisterFormValues(initialRegisterFormValues);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //Sam End

  //Micherre Start
  // const postNewRecipe = (newRecipe) => {
  //   axios
  //     .post("noidea", newRecipe)
  //     .then((res) => {
  //       setRecipes([res.data], ...recipes);
  //       setRecipeFormValues(initialRecipeFormValues);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  //Micherre End

  //Sam Start
  // const loginSubmit = (evt) => {
  //   evt.preventDefault();
  //   axios
  //     .post("https://reqres.in/api/users", login)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   submit();
  // };
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
  const loginChange = (name, value) => {
    setLogin({ ...login, [name]: value });
  };
  const submit = () => {
    const newUser = {
      // fname: registerFormValues.fname.trim(),
      // lname: registerFormValues.lname.trim(),
      username: registerFormValues.username.trim(),
      email: registerFormValues.email.trim(),
      password: registerFormValues.password,
      // termsOfService: registerFormValues.termsOfService,
    };
    postNewUser(newUser);
  };
  //Sam End

  //Micherre Start
  // const validateRecipe = (e) => {
  //   yup
  //     .reach(recipeFormSchema, e.target.name)
  //     .validate(e.target.value)
  //     .then(() => setRecipeErrorValues({...recipeErrorValues, [e.target.name]: ""}))
  //     .catch(err => setRecipeErrorValues({...recipeErrorValues, [e.target.name]: err.errors[0]}));

  //     setRecipeFormValues({ ...recipeFormValues, [e.target.name]: e.target.value});
  // };

  const submitNewRecipe = () => {
    const newRecipe = {
      recipeName: recipeFormValues.recipeName.trim(),
      recipeSource: recipeFormValues.recipeSource.trim(),
      prepTime: recipeFormValues.prepTime.trim(),
      cookTime: recipeFormValues.cookTime.trim(),
      ingredients: recipeFormValues.ingredients.trim(),
      directions: recipeFormValues.directions.trim(),
      id: uuid(),
    };
    postNewRecipe(newRecipe);
  };
  //Micherre End

  //Sam Start
  useEffect(() => {
    formSchema.isValid(registerFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [registerFormValues]);
  //Sam End

  //Shanon Start
  const postNewUser = (newUser) => {
    axiosWithAuth()
      .post("/auth/register", newUser)
      .then((res) => {
        console.log(res);
        // setUsers(...users, [res.data]);
        // setRegisterFormValues(initialRegisterFormValues);
        // push('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/auth/login", login)
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.payload);
        // push('/recipes');
      });
  };

  const postNewRecipe = (newRecipe) => {
    // axiosWithAuth().post('/recipes', newRecipe)
    //   .then(res =>{
    //     console.log(res);
    //     // setRecipes(...recipes, [res.data]);
    //     // setRecipeFormValues(initialRecipeFormValues);
    //     // push('/recipes');
    //   })
    //   .catch(err =>{
    //     console.log(err);
    //   });
    setRecipes(...recipes, [newRecipe]);
    setRecipeFormValues(initialRecipeFormValues);
    push("/recipes");
  };

  const recipeHandleChange = (name, value) => {
    setRecipeFormValues({ ...recipeFormValues, [name]: value });
  };

  const onRecipeSubmit = (event) => {
    event.preventDefault();

    const newRecipe = { ...recipeFormValues, id: uuid() };
    setRecipes([newRecipe, ...recipes]);
    setRecipeFormValues(initialRecipeFormValues);

    push("/recipes");
  };

  const onRecipeChange = (event) => {
    setRecipeFormValues({
      ...recipeFormValues,
      [event.target.name]: event.target.value,
    });
  };
  //Shanon End

  return (
    <AppStyle className="App">
      <Route exact path="/login">
        <Login
          login={login}
          loginSubmit={loginSubmit}
          loginChange={loginChange}
        />
        <p className="afterForm">
          Don't have an account?{" "}
          <Link to="/" className="clickHere">
            Click here
          </Link>{" "}
          to create a new account.
        </p>
      </Route>

      <Route exact path="/">
        <Register
          registerFormErrors={registerFormErrors}
          registerFormValues={registerFormValues}
          inputChange={inputChange}
          checkboxChange={checkboxChange}
          submit={submit}
          disabled={disabled}
        />
        <p className="afterForm">
          Already have an account?{" "}
          <Link to="/login" className="clickHere">
            Click here
          </Link>{" "}
          to sign in.
        </p>
      </Route>
      <RecipesContext.Provider value={{ recipes }}>
        {/* <PrivateRoute exact path='/recipes' component={Recipes}/> */}
        <Route exact path="/recipes">
          <Recipes />
        </Route>
      </RecipesContext.Provider>
      <Route exact path="/add">
        <RecipeForm
          // recipeFormErrors={recipeErrorValues}
          // recipeFormValues={recipeFormValues}
          // validateRecipe={validateRecipe}
          // submit={submitNewRecipe}
          // recipeHandleChange={recipeHandleChange}
          recipeFormValues={recipeFormValues}
          onSubmit={onRecipeSubmit}
          onChange={onRecipeChange}
        />
      </Route>
    </AppStyle>
  );
}

export default App;
