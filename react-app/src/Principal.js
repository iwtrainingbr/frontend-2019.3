import React from 'react';
import {Button, TextField, Grid, Divider} from '@material-ui/core';
import Navbar from './componentes/Navbar';
import Categoria from './componentes/Categoria/Categoria';
import Financas from './componentes/Financas/Financas';
import Dashboard from './componentes/Dashboard';
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Test from './Test';
import Teste from './Teste';

import './Principal.css';

export default function Principal() {
  return <div style={{paddingLeft: '5%', paddingRight: '5%'}}>

    <BrowserRouter>
      <Navbar/>

      <Divider style={{marginTop: 20, marginBottom: 20}}/>

      <Switch>
        <Route path="/categoria" component={Categoria}/>
        <Route path="/financas" component={Financas}/>
        <Route path="/teste" component={Test}/>
        <Route path="/paginacao" component={Teste}/>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/*" component={PaginaNaoEncontrada}/>
      </Switch>
    </BrowserRouter>
  </div>;
}
