import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//components
import Login from './components/Login'


//initial values
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
  //default values

  //form validation

  //Update form values on form change

  //post form values



  return (
    <div className="App">
      Hello World

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
