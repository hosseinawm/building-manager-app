'use client';

// material-ui
import { Box, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddCostModal from 'customs/AddCostModal';

// table data
function createData(cost: string, date: string, price: string, description: string) {
  return { cost, date, price, description };
}

const rows = [
  createData('قبض برق', '1404/8/19', '3,500,000', ''),
  createData('سم پاشی ساختمان', '1404/7/24', '3,000,000', ''),
  createData('خدمات ساختمان', '1404/7/30', '1,000,000', ''),
  createData('تعمیر لوله', '1404/6/12', '5,000,000', 'hello world')
];

// =========================|| DATA WIDGET - APPLICATION SALES CARD ||========================= //

const CostsTab = () => {
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
        title="لیست هزینه ها"
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
                <TableCell sx={{ pl: 3 }}>نوع هزینه</TableCell>
                <TableCell align="center">مبلغ</TableCell>
                <TableCell align="center">تاریخ</TableCell>
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
                      {row.cost}
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
      <AddCostModal open={open} setOpen={setOpen} />
    </>
  );
};

export default CostsTab;
