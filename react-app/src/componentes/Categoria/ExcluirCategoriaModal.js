import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ExcluirCategoriaModal(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Você tem certeza que deseja excluir?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação é irreversivel e os dados não existirão mais.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Semcordar
          </Button>
          <Button onClick={() => {
            props.excluirCategoria(props.id);
            props.handleClose();
          }} color="primary" variant="contained" autoFocus>
            Concordar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
