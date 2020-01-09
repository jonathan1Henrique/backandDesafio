import React from 'react';
import './App.css';
import Menu from './components/menu/menu'
import Cliente from './components/cliente/cliente'
import Detalhe from './components/detalhe/detalhe'
import { Switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <div>
      <Menu/>
      <Switch>
        <Route path="/" exact component={Cliente}/>
        <Route path="/detalhe" component={Detalhe}/>
      </Switch>
    </div>
  );
}

export default App;
