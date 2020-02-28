import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import NovaCategoria from './NovaCategoria';
import ListarCategoria from './ListarCategoria';


export default class Categoria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
    };

  }

  componentDidMount() {
    this.setState({
      categorias: [
        {nome: 1, descricao: 'A'},
        {nome: 2, descricao: 'B'},
        {nome: 3, descricao: 'C'},
      ]
    });
  }

  inserirCategoria = (nome, descricao) => {
    let novaCategoria = {nome: nome, descricao: descricao};

    this.setState({
      categorias: [...this.state.categorias, novaCategoria]
    });
  }

  render() {
    return (
      <Grid container spacing={6}>
        <Grid item md={4}>
          <NovaCategoria inserirCategoria={this.inserirCategoria}/>
        </Grid>
        <Grid item md={8}>
          <ListarCategoria categorias={this.state.categorias}/>
        </Grid>
      </Grid>
    );
  }
}
