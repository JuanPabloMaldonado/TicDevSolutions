import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Header from './components/header/Header';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>          
        <Route exact path="/"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/>         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
