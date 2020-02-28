import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import NovaCategoria from './NovaCategoria';
import ListarCategoria from './ListarCategoria';
import firebase from '../../config/firebase';

const collection = firebase.firestore().collection("fn_categorias");

export default class Categoria extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categorias: [],
    };

  }

  componentDidMount() {
    collection.get().then(response => {
      let cats = [];

      response.forEach(doc => {
          cats.push(doc.data());
      })

      this.setState({
        categorias: cats
      })
    });
  }

  inserirCategoria = (nome, descricao) => {
    let novaCategoria = {nome: nome, descricao: descricao};

    this.setState({
      categorias: [...this.state.categorias, novaCategoria]
    });

    collection.add(novaCategoria).then(response => {

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
