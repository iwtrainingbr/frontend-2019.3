import React from 'react';
import {Grid} from '@material-ui/core';
import MeuCard from './MeuCard';

export default function Dashboard() {
  return (
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
  )
}
