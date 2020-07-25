import React, { useState, useEffect} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//components
import Login from './components/Login'

function App() {
  const loginProps = {
    //form values states

    //default values

    //Update form values on form change

    //post form values
  }

  return (
    <div className="App">
      Hello World

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
