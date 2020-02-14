import React from 'react';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';

export default function Navbar() {
  return <AppBar position="state">
    <Toolbar>
      <Typography style={{flexGrow: 1}} variant="h6">Minhas Finanças</Typography>

      <Button color="inherit">Dashboard</Button>
      <Button color="inherit">Relatório</Button>
    </Toolbar>
  </AppBar>;
}
