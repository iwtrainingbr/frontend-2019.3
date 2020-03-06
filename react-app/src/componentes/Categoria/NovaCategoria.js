import React, {useState} from 'react';
import {Card, CardContent, Typography, TextField, Divider, Button} from '@material-ui/core';

export default function NovaCategoria(props) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nomeComErro, setNomeComErro] = useState(false);
  const [descComErro, setDescComErro] = useState(false);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3">Nova Categoria</Typography>

          <Divider style={{marginTop: 15, marginBottom: 15}}/>

          <form onSubmit={(event) => {
            event.preventDefault();

            if (nome === '') {
              setNomeComErro('Nome é obrigatório');
              return;
            }

            if (descricao === '') {
              setDescComErro('Descrição é obrigatória');
              return;
            }

            props.inserirCategoria(nome, descricao);
          }}>
            <TextField
              onChange={(event) => setNome(event.target.value)}
              style={{marginTop: 15}}
              variant="outlined"
              label="Nome"
              helperText={nomeComErro}
              error={nomeComErro?true:false}
              fullWidth />

            <TextField
              onChange={(event) => {
                setDescricao(event.target.value);
                setDescComErro(false);
              }}
              style={{marginTop: 15}}
              variant="outlined"
              label="Descrição"
              rows={4}
              error={descComErro?true:false}
              helperText={descComErro}
              multiline
              fullWidth
            />

            <Button type="submit" style={{marginTop: 15}} color="primary" size="large" fullWidth variant="contained">
              ENVIAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
