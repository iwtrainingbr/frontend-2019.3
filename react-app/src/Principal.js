import React from 'react';
import {Button, TextField, Grid, Divider} from '@material-ui/core';
import Navbar from './componentes/Navbar';
import MeuCard from './componentes/MeuCard';

import './Principal.css';

export default function Principal() {
  return <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
    <Navbar/>

    <Divider style={{marginTop: 20, marginBottom: 20}}/>

    <Grid container spacing="6">
      <Grid item md="4">
        <MeuCard conteudoCor="#fff" titulo="Entrada" cor="#004c28" valor="2500"/>
      </Grid>
      <Grid item md="4">
        <MeuCard conteudoCor="#fff" titulo="Saída" cor="#cc0000" valor="2700"/>
      </Grid>
      <Grid item md="4">
        <MeuCard titulo="Balanço" valor={2500 - 2700}/>
      </Grid>
    </Grid>
  </div>;
}
