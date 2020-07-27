import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
//components
import Login from './components/Login'
import loginSchema from './validation/loginSchema'
import LoginSuccessful from './components/LoginSuccessful'
import CreateNewUser from './components/SignUpForm'

//Login initial values and errors
const initialLoginValues = {
  username: '',
  password: '',
}
const defaultLoginErrorMessages = {
  username: '',
  password: '',
}

//initial sign up form values and errors messages
const initalSignUpValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: ''
}
const initalSignUpErrorMessages = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: ''
}

function App() {
  const history = useHistory()
  const futurePageAfterLogingIn = '/home'
  const noCurrentForm = ''
  const [inCurrentForm, setInCurrentForm] = useState(noCurrentForm)

  //sign up states
  const [signUpFormValues, setSignUpFormValues] = useState(initalSignUpValues)
  const [signUpErrorMessages, setSignUpErrorMessages] = useState(initalSignUpErrorMessages)

  //form values states
  const [loginFormValues, setLoginFormValues] = useState(initialLoginValues)
  const [loginErrorMessages, setLoginErrorMessages] = useState(defaultLoginErrorMessages)

  //event handlers
  const handleChange = e => {
    //update form values state to the current inputed values
    e.persist()
    const { name, checked, value } = e.target
    e.target.type === 'checkbox'
      ? setLoginFormValues({ ...loginFormValues, [name]: checked })
      : setLoginFormValues({ ...loginFormValues, [name]: value })

    yup
      //get schema that is store in another file, and find the key that matches name
      .reach(loginSchema, name)
      //make sure that the value matches all the conditions of the key
      .validate(value)
      //if all conditions matches then don't display any errors
      .then(() => {
        setLoginErrorMessages({ ...loginErrorMessages, [name]: '' })
      })
      //if there is some conditions that don't match then save the errors to state loginErrorMessages
      .catch(err => {
        setLoginErrorMessages({ ...loginErrorMessages, [name]: err.errors[0] })
        debugger
        switch(inCurrentForm){
          case 'Login':
            console.log('Login case')
            break
          case 'SignUpForm':
            console.log('signUpForm case')
            break
          default:
            console.log('default case')
        }
        setInCurrentForm(noCurrentForm)    

      })

      
  }
  const onSubmit = e => {
    e.preventDefault()
    const logginInData = {
      username: loginFormValues.username,
      password: loginFormValues.password,
    }
    //reset login form
    setLoginFormValues(initialLoginValues)


    //this data needs be check with the back-end
  }
  function showSuccessLoginPage() {
    //show success login page 
    history.push('/success-login')
    setTimeout(() => { history.push(futurePageAfterLogingIn) }, 3000)
  }

  return (
    <div className="App">
      App.js file

      <Switch>
        <Route path='/login'>
          <Login
            loginFormValues={loginFormValues}
            handleChange={handleChange}
            onSubmit={onSubmit}
            loginErrorMessages={loginErrorMessages}
            setInCurrentForm={setInCurrentForm}
          />
        </Route>
        <Route path='/success-login' >
          <LoginSuccessful />
        </Route>
        <Route path='/sign-up'>
          <CreateNewUser
          setInCurrentForm={setInCurrentForm}
          
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
