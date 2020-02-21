import React from 'react';
import {Typography} from '@material-ui/core';

export default function PaginaNaoEncontrada() {
  return (
    <div style={{
      backgroundColor: '#ed6363',
      borderRadius: '10px',
      padding: 20
    }}>
      <Typography variant="h4" style={{color: '#fff'}}>
        Ops, página não encontrada.
      </Typography>
    </div>
  );
}
