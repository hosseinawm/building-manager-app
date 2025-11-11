'use client';

// material-ui
import {
  Button,
  IconButton,
  MenuItem,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { IconDotsVertical } from '@tabler/icons-react';
import { useState } from 'react';

// table data
function createData(unit: string, name: string, phoneNumber: string, charge: string) {
  return { unit, name, charge, phoneNumber };
}

const rows = [
  createData('واحد 1', 'حسین', '09199617158', '1,000,000'),
  createData('واحد 2', 'سینا', '09123456789', '1,000,000'),
  createData('واحد 3', 'حامد', '09123456789', '1,000,000'),
  createData('واحد 4', 'احسان', '09123456789', '1,000,000')
];
// =========================|| DATA WIDGET - APPLICATION SALES CARD ||========================= //

const ResidentsTab = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    unit: '',
    name: '',
    phoneNumber: '',
    charge: ''
  });

  const handleNewService = () => {
    setOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('saved');
    setOpen(false);
  };
  return (
    <>
      <MainCard title="مدیریت ساکنین" content={false}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ pl: 3 }}>واحد</TableCell>
                <TableCell align="center">نام</TableCell>
                <TableCell align="center">شماره تلفن</TableCell>

                <TableCell align="center" sx={{ pr: 3 }}>
                  میزان شارژ
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow hover key={index}>
                  <TableCell sx={{ pl: 3 }}>
                    <Typography align="left" component="div" variant="body1">
                      {row.unit}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.phoneNumber}</TableCell>

                  <TableCell align="center" sx={{ pr: 3 }}>
                    {row.charge}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={handleNewService}>
                      <IconDotsVertical stroke={2} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <MainCard
          sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24,
            width: { xs: '17rem', sm: '20rem' }
          }}
        >
          <Stack spacing={2}>
            <TextField select label="واحد" name="unit" value={formData.unit} onChange={handleChange} fullWidth>
              {rows.map((item) => (
                <MenuItem key={item.unit} value={item.unit}>
                  {item.unit}
                </MenuItem>
              ))}
            </TextField>
            <TextField label="نام" name="name" type="text" value={formData.name} onChange={handleChange} fullWidth />
            <TextField label="شماره تلفن" name="phone-number" type="text" value={formData.phoneNumber} onChange={handleChange} fullWidth />

            <TextField
              label="شارژ ماهیانه"
              name="charge"
              type="number"
              value={formData.charge}
              onChange={handleChange}
              fullWidth
              inputProps={{
                min: 0
              }}
              InputProps={{
                endAdornment: <Typography sx={{ ml: 1 }}>ریال</Typography>,
                inputMode: 'numeric'
              }}
              sx={{
                '& input[type=number]': {
                  MozAppearance: 'textfield'
                },
                '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                  WebkitAppearance: 'none',
                  margin: 0
                }
              }}
            />
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ py: 1 }}>
              <Button size="large" variant="outlined" color="error" onClick={() => setOpen(false)}>
                لغو
              </Button>
              <Button size="large" variant="contained" color="secondary" onClick={handleSave}>
                ثبت
              </Button>
            </Stack>
          </Stack>
        </MainCard>
      </Modal>
    </>
  );
};

export default ResidentsTab;
