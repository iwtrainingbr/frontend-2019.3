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
          cats.push({
            id: doc.id,
            ...doc.data()
          });
      })

      this.setState({
        categorias: cats
      })
    });
  }

  excluirCategoria = (id) => {
    let restantes = this.state.categorias.filter(cadaCat => {
      return cadaCat.id !== id;
    });

    this.setState({categorias: restantes});

    collection.doc(id).delete();
  };

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
          <ListarCategoria excluirCategoria={this.excluirCategoria} categorias={this.state.categorias}/>
        </Grid>
      </Grid>
    );
  }
}
