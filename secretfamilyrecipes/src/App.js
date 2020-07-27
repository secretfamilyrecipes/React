import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import axios from "axios";
import { Link, Route } from "react-router-dom";
// import "./App.css";
import Login from "./Components/Login";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import Register from "./Components/Register";

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
const registerErrorValues = {
  username: "",
  password: "",
};
const initialUsers = [];

function App() {
  const [loginFormValues, setLoginFormValues] = useState(
    initialLoginFormValues
  );
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );
  const [registerFormErrors, setFormErrors] = useState(registerErrorValues);
  const [users, setUsers] = useState(initialUsers);

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
    </div>
  );
}

export default App;
