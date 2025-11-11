'use client';
// material-ui
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import IncomeModal from 'customs/AddIncomeModal';

// table data
function createData(nameOrPhoneNumber: string, price: string, date: string, description: string) {
  return { nameOrPhoneNumber, price, date, description };
}

const rows = [
  createData('سینا', '1,000,000', '1404/7/24', ''),
  createData('09199617158', '1,000,000', '1404/7/20', ''),
  createData('علی', '1,000,000', '1404/7/30', ''),
  createData('09123456789', '1,000,000', '1404/7/24', '')
];

// =========================|| DATA WIDGET - APPLICATION SALES CARD ||========================= //

const IncomesTab = () => {
  const [open, setOpen] = useState(false);

  const handleDownloadClick = () => {
    console.log('Download clicked');
  };

  const handleNewCost = () => {
    setOpen(true);
  };

  return (
    <>
      <MainCard
        title="درآمدها"
        secondary={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" onClick={handleDownloadClick}>
              <DownloadIcon />
            </IconButton>
            <IconButton size="small" onClick={handleNewCost}>
              <AddIcon />
            </IconButton>
          </Box>
        }
        content={false}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ pl: 3 }}>نام یا شماره تلفن</TableCell>
                <TableCell align="center">تاریخ</TableCell>
                <TableCell align="center">مبلغ</TableCell>
                <TableCell align="center" sx={{ pr: 3 }}>
                  توضیحات
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ pl: 3 }}>
                    <Typography align="left" component="div" variant="body1">
                      {row.nameOrPhoneNumber}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center" sx={{ pr: 3 }}>
                    {row.price}
                  </TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
      <IncomeModal open={open} setOpen={setOpen} />
    </>
  );
};

export default IncomesTab;
