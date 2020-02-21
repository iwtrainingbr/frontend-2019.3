import React from 'react';
import {AppBar, Toolbar, Button, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return <AppBar position="state">
    <Toolbar>
      <Typography style={{flexGrow: 1}} variant="h6">Minhas Finanças</Typography>

      <Link className="navbar-link" to="/">
        <Button color="inherit">Dashboard</Button>
      </Link>

      <Link className="navbar-link" to="/relatorios">
        <Button color="inherit">Relatório</Button>
      </Link>

      <Link className="navbar-link" to="/categoria">
        <Button color="inherit">Categorias</Button>
      </Link>

      <Link className="navbar-link" to="/financas">
        <Button color="inherit">Finanças</Button>
      </Link>
    </Toolbar>
  </AppBar>;
}
