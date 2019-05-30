import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Link from '@material-ui/core/Link';

class CreditList extends React.Component {
  state = {
    dialogOpen: false,
  };

  handleClickOpen = () => {
    this.setState({ dialogOpen: true });
  };

  handleClose = () => {
    this.setState({ dialogOpen: false });
  };

  render() {
    return (
      <div className={this.props.className}>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>Credits</Button>

        <Dialog
          onClose={this.handleClose}
          aria-labelledby="credit-dialog-title"
          open={this.state.dialogOpen}
        >
          <DialogTitle id="credit-dialog-title" onClose={this.handleClose}>
            Galavanting Gnome Credits
          </DialogTitle>

          <DialogContent>
            <Typography gutterBottom>Hugh Mann</Typography>

            <Typography gutterBottom>
              <Link href="#">
                Read the writeup
              </Link>
            </Typography>
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreditList;
