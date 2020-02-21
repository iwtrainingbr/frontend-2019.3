import React from 'react';
import {Grid} from '@material-ui/core';
import NovaFinanca from './NovaFinanca';
import ListarFinancas from './ListarFinancas';

export default function Financas() {
  return (
    <Grid container spacing={6}>
      <Grid item md={4}>
        <NovaFinanca/>
      </Grid>
      <Grid item md={8}>
        <ListarFinancas/>
      </Grid>
    </Grid>
  )
}
