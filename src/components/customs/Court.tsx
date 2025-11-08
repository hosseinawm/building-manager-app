import * as React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import CustomModal from 'ui-component/Modal';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import CancelButton from './CancelButton';
import ReserveTime from './ReserveTime';

function createData(time: string, id: number, fat: number, carbs: number, protein: number, booked: boolean) {
  return { time, id, fat, carbs, protein, booked };
}

const rows = [
  createData('8:00', 159, 6.0, 24, 4.0, true),
  createData('9:00', 237, 9.0, 37, 4.3, false),
  createData('10:00', 262, 16.0, 24, 6.0, true),
  createData('11:00', 305, 3.7, 67, 4.3, false),
  createData('12:00', 356, 16.0, 49, 3.9, true),
  createData('13:00', 356, 16.0, 49, 3.9, true),
  createData('14:00', 356, 16.0, 49, 3.9, true),
  createData('15:00', 356, 16.0, 49, 3.9, true),
  createData('16:00', 356, 16.0, 49, 3.9, true),
  createData('17:00', 356, 16.0, 49, 3.9, true)
];

export default function CourtCard() {
  // -------------  HOOKS -------------
  const [openModal, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const intl = useIntl();

  // -------------  FUNCTIONS -------------
  let courtID = 0;
  const handleOpenModal = (row: SchedulePlan) => {
    if (row.booked) return;
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const handleClickRow = (row: SchedulePlan) => {
    handleOpenModal(row);
    courtID = row.id;
  };
  const handleCancelTime = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(
          openSnackbar({
            open: true,
            message: intl.formatMessage({ id: 'canceled-court' }),
            variant: 'alert',
            close: false
          })
        );
        resolve(true);
      }, 1000);
    });

  // -------------  JSX -------------
  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.time}
                onClick={() => handleClickRow(row)}
                hover={!row.booked}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, width: '100%', cursor: row.booked ? 'auto' : 'pointer' }}
              >
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="center" sx={{ height: '50px' }}>
                  {row.booked ? 'حامد مطری 09127023462  ' : '-'}
                </TableCell>

                <TableCell align="right">{row.booked && <CancelButton handleCancel={handleCancelTime} />}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomModal open={openModal} handleClose={handleCloseModal}>
        <ReserveTime closeModal={handleCloseModal} courtID={courtID} />
      </CustomModal>
    </>
  );
}
type SchedulePlan = {
  id: number;
  time: string;
  booked: boolean;
  user?: string;
};
