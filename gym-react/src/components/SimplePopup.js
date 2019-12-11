import React from 'react';

import './SimplePopup.scss';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const SimplePopup = ({ onClose, title, info, open }) => {
  return (
    <Dialog className="SimplePopup" onClose={onClose} open={open}>
      <div>
        <DialogTitle>{title}</DialogTitle>
        <p>{info}</p>
        <Button variant="contained" color="primary" onClick={onClose}>
          OK
        </Button>
      </div>
    </Dialog>
  );
};

export default SimplePopup;
