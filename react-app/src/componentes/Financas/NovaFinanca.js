import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Divider,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from '@material-ui/core';
import InputMask from 'react-input-mask';

export default function NovaFinanca() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h3">Nova Movimentação</Typography>

          <Divider style={{marginTop: 15, marginBottom: 15}}/>

          <form>
            <TextField style={{marginTop: 15}} variant="outlined" label="Titulo" fullWidth />

            <TextField
              style={{marginTop: 15}}
              variant="outlined"
              label="Descrição"
              rows={4}
              multiline
              fullWidth
            />


            <InputMask mask="R$ \\9999" maskChar={" "}>
              {(props) => {
                  return <TextField
                    variant="outlined"
                    label="Valor"
                    fullWidth
                  />;
              }}
            </InputMask>



            <FormControl style={{marginTop: 15}} fullWidth variant="outlined">
              <InputLabel id="select-categoria">Categoria</InputLabel>
              <Select labelId="select-categoria">
                <MenuItem value="1">Ten</MenuItem>
                <MenuItem value="2">Twenty</MenuItem>
                <MenuItem value="3">Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl style={{marginTop: 15}} fullWidth variant="outlined">
              <InputLabel id="select-tipo">Tipo</InputLabel>
              <Select labelId="select-tipo">
                <MenuItem value={"Entrada"}>Entrada</MenuItem>
                <MenuItem value="Saída">Saída</MenuItem>
              </Select>
            </FormControl>

            <Button style={{marginTop: 15}} color="primary" size="large" fullWidth variant="contained">
              ENVIAR
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
