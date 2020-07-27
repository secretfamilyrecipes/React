import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom'
import * as yup from 'yup'
//components
import Login from './components/Login'
import loginSchema from './validation/loginSchema'
import LoginSuccessful from './components/LoginSuccessful'
import SignUpForm from './components/SignUpForm'

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
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  termAndConditions: false,
}
const initalSignUpErrorMessages = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
  termAndConditions: false,
}

function App() {
  const history = useHistory()
  const futurePageAfterLogingIn = '/home'
  const noCurrentForm = ''
  let inCurrentForm = noCurrentForm
  const formNamesList = {
    login: 'Login',
    singUpForm: 'SignUpForm'
  }
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
    //if the type is checkbox, the value is update with checked function instead of value
    //update value state depending on which form the handleChange is coming from
    const isCheckbox = e.target.type === 'checkbox'
    const isInLoginForm = inCurrentForm === formNamesList.login
    const isInSingUpForm = inCurrentForm === formNamesList.singUpForm

    if(isCheckbox){
      if(isInLoginForm){
        setLoginFormValues({ ...loginFormValues, [name]: checked })
      }else if(isInSingUpForm){
        setSignUpFormValues({ ...signUpFormValues, [name]: checked })
        console.log('updating sign form' + signUpFormValues)

      }
    }else{//isloging
      if(isInLoginForm){
        setLoginFormValues({ ...loginFormValues, [name]: value })
      }else if(isInSingUpForm){
        setSignUpFormValues({ ...signUpFormValues, [name]: value })
        console.log('updating sign form' + signUpFormValues)
      }
    }

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
  function changeInCurrentForm(atForm) {
    //which form is the handleChange being called from?

    switch (atForm) {
      case 'Login':
        inCurrentForm = 'Login'
        break
      case 'SignUpForm':
        inCurrentForm = 'SignUpForm'
        break
      default:
        debugger

    }
  }
  //use effects

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
            changeInCurrentForm={changeInCurrentForm}
          />
        </Route>
        <Route path='/success-login' >
          <LoginSuccessful />
        </Route>
        <Route path='/sign-up'>
          <SignUpForm
            changeInCurrentForm={changeInCurrentForm}
            signUpErrorMessages={signUpErrorMessages}
            signUpFormValues={signUpFormValues}
            handleChange={handleChange}
            onSubmit={onSubmit}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
