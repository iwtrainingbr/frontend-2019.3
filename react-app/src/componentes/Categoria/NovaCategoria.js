import React from 'react';
import {Card, CardContent, Typography, TextField, Divider, Button} from '@material-ui/core';

export default function NovaCategoria() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3">Nova Categoria</Typography>

          <Divider style={{marginTop: 15, marginBottom: 15}}/>

          <form>
            <TextField style={{marginTop: 15}} variant="outlined" label="Nome" fullWidth />

            <TextField
              style={{marginTop: 15}}
              variant="outlined"
              label="Descrição"
              rows={4}
              multiline
              fullWidth
            />

            <Button style={{marginTop: 15}} color="primary" size="large" fullWidth variant="contained">
              ENVIAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
