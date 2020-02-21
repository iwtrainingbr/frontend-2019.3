import React from 'react';
import {Grid} from '@material-ui/core';
import NovaCategoria from './NovaCategoria';
import ListarCategoria from './ListarCategoria';

export default function Categoria() {
  return (
    <Grid container spacing={6}>
      <Grid item md={4}>
        <NovaCategoria/>
      </Grid>
      <Grid item md={8}>
        <ListarCategoria/>
      </Grid>
    </Grid>
  )
}
