'use client';
import { useState } from 'react';
import { Box, Button, MenuItem, Modal, Stack, TextField, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MainCard from 'ui-component/cards/MainCard';

const buildingTypes = [
  { value: 'مجتمع', label: 'مجتمع' },
  { value: 'بلوک', label: 'بلوک' },
  { value: 'شهرک', label: 'شهرک' }
];

const buildingUse = [
  { value: 'مسکونی', label: 'مسکونی' },
  { value: 'اداری', label: 'اداری' },
  { value: 'تجاری', label: 'تجاری' }
];

const Panel = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    use: '',
    unit: '',
    budget: '',
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
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', mt: '4rem', rowGap: 6 }}>
        <Typography variant="h1">لیست ساختمان ها</Typography>

        <Button
          variant="contained"
          color="secondary"
          onClick={handleNewService}
          sx={{
            width: '18rem',
            height: '22rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'black'
          }}
        >
          <Typography variant="h4">ساختمان جدید</Typography>
          <AddBoxIcon sx={{ fontSize: '4rem' }} />
        </Button>
      </Box>
      <Modal keepMounted open={open} onClose={() => setOpen(false)}>
        <MainCard
          sx={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: 24
          }}
        >
          <Stack spacing={2}>
            <Typography
              variant="caption"
              align="center"
              sx={{ mb: 2, px: 2, py: 1, border: '1px solid red', borderRadius: 3, color: 'red' }}
            >
              توجه: در صورت مدیر بودن این فرم پر شود. چنانچه جزو ساکنین هستید، مدیر ساختمان ابتدا باید شما را به ساکنین ساختمان اضافه کرده
              تا ساختمان برای شما در لیست نشان داده شود
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField label="نام ساختمان" name="name" type="text" value={formData.name} onChange={handleChange} fullWidth />
              <TextField select label="نوع ساختمان" name="type" value={formData.type} onChange={handleChange} fullWidth>
                {buildingTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField select label="کاربری ساختمان" name="use" value={formData.use} onChange={handleChange} fullWidth>
                {buildingUse.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField label="تعداد واحدها" name="unit" type="number" value={formData.unit} onChange={handleChange} fullWidth />
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                label="موجودی صندوق"
                name="budget"
                type="number"
                value={formData.budget}
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
            </Box>

            <Stack direction="row" spacing={2} justifyContent="flex-end">
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

export default Panel;
