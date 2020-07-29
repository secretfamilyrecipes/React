import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import Register from "./Components/Register";
import { dummydata } from "./utils/dummydata";
import { RecipesContext } from "./utils/RecipesContext";
import Recipes from "./Components/RecipesList";
import styled from "styled-components";

const data = dummydata;
const AppStyle = styled.div`
  text-align: center;
  background: #dfce9d;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    background: #1799b5;
    padding: 1% 0;
    border-radius: 10px;
    h1 {
      font-family: Akronim;
    }
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
  termsOfService: false,
};
const registerErrorValues = {
  username: "",
  password: "",
  email: "",
};
const initialUsers = [];
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
  const loginSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("https://reqres.in/api/users", login)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    submit();
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
      termsOfService: registerFormValues.termsOfService,
    };
    postNewUser(newUser);
  };
  useEffect(() => {
    formSchema.isValid(registerFormValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [registerFormValues]);
  return (
    <AppStyle className="App">
      <Route exact path="/login">
        <Login
          login={login}
          loginSubmit={loginSubmit}
          loginChange={loginChange}
        />
        <p>
          Don't have an account? <Link to="/">Click here</Link> to create a new
          account.
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
        <p>
          Already have an account? <Link to="/login">Click here</Link> to sign
          in.
        </p>
      </Route>
      <RecipesContext.Provider value={{ data }}>
        <Route exact path="/recipes">
          <Recipes />
        </Route>
      </RecipesContext.Provider>
    </AppStyle>
  );
}

export default App;
