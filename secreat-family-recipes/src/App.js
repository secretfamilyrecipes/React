import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//components
import Login from './components/Login'
import loginSchema from './validation/loginSchema'

//Login initial values and errors
const initialLoginValues = {
  username: '',
  password: '',
}
const defaultLoginErrorMessages = {
  username: '',
  password: '',
}

function App() {
  //form values states
  const [loginFormValues, setLoginFormValues] = useState(initialLoginValues)
  const [loginErrorMessages, setLoginErrorMessages] = useState(defaultLoginErrorMessages)

  //form validation

  //Update form values on form change

  //post form values

  //event handlers
  const handleChange = e => {
    //update form values state to the current inputed values
    e.persist()
    const { name, checked, value } = e.target
    e.target.tye === 'checkbox'
      ? setLoginFormValues({ ...loginFormValues, [name]: checked })
      : setLoginFormValues({ ...loginFormValues, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="App">
      Hello World

      <Switch>
        <Route path='/login'>
          <Login loginFormValues={loginFormValues} handleChange={handleChange} onSubmit={onSubmit} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
