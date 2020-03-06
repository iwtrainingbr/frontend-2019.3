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
import ExcluirCategoriaModal from './ExcluirCategoriaModal';

export default function ListarCategoria(props) {
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card>
      <CardContent>
        <ExcluirCategoriaModal excluirCategoria={props.excluirCategoria} id={id} handleClose={handleClose} open={open}/>

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
                props.categorias.map(cat => {
                  return (
                    <TableRow>
                      <TableCell>{cat.nome}</TableCell>
                      <TableCell>{cat.descricao}</TableCell>
                      <TableCell>
                        <Button>
                          <DeleteIcon onClick={() => {
                            handleClickOpen();
                            setId(cat.id);
                          }}/>
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
