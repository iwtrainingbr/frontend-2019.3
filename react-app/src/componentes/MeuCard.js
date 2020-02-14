import React from 'react';
import {Card, CardContent, Typography, CardActionArea} from '@material-ui/core';

export default function MeuCard(props) {
  return <Card style={{backgroundColor: props.cor}}>
    <CardActionArea>
      <CardContent style={{color: props.conteudoCor}}>
        <Typography variant="h3">{props.titulo}</Typography>
        <Typography variant="h2">R$ {props.valor}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>;
};
