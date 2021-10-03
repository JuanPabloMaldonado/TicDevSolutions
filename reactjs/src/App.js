import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import Registro from './components/registro/Registro';
import Productos from './components/productos/Productos';
import Roles from './components/roles/Roles';
import Perfil from './components/perfil/Perfil';
import Registroproducto from './components/registroproducto/Registroproducto';
import Registroventa from './components/registroventa/Registroventa';
import Buscarproducto from './components/buscarproducto/buscarproducto';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/roles" component={Roles} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/registroproducto" component={Registroproducto} />
          <Route exact path="/registroventa" component={Registroventa} />
          <Route exact path="/buscarproducto" component={Buscarproducto} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
