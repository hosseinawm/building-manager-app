import * as React from 'react';

import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

type Props = {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  py: 2,
  px: 4
};
const CustomModal: React.FC<Props> = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper sx={style}>{children}</Paper>
    </Modal>
  );
};

export default CustomModal;
