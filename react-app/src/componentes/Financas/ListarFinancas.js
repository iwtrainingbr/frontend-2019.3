import React from 'react';
import {
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@material-ui/core';

import {
  Delete as DeleteIcon,
  Edit as EditIcon
} from '@material-ui/icons';

const categorias = [
  {nome: 1, descricao: 'A'},
  {nome: 2, descricao: 'B'},
  {nome: 3, descricao: 'C'},
];

export default function ListarFinancas() {
  return (
    <Card>
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead style={{backgroundColor: '#333'}}>
              <TableRow>
                <TableCell style={{color: '#fff', fontWeight: 'bold'}}>Nome</TableCell>
                <TableCell style={{color: '#fff', fontWeight: 'bold'}}>Descrição</TableCell>
                <TableCell style={{color: '#fff', fontWeight: 'bold'}}>Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                categorias.map(cat => {
                  return (
                    <TableRow>
                      <TableCell>{cat.nome}</TableCell>
                      <TableCell>{cat.descricao}</TableCell>
                      <TableCell>
                        <Button>
                          <DeleteIcon/>
                        </Button>
                        <Button>
                          <EditIcon/>
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
