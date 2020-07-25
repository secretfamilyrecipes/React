import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

//components
import Login from './components/Login'

function App() {
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
