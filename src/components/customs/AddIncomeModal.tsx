import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import UserAutocomplete from './UserAutocomplete';
import { DatePicker } from '@mui/x-date-pickers';
import React from 'react';

const AddIncomeModal: React.FC<Props> = ({ open, setOpen }) => {
  const [formData, setFormData] = React.useState({
    nameOrPhoneNumber: '',
    cost: '',
    date: '',
    description: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Form submitted:', formData);
    setOpen(false);
    setFormData({ nameOrPhoneNumber: '', cost: '', date: '', description: '' });
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <MainCard
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h3" align="center" sx={{ mb: 2 }}>
            شارژ دستی
          </Typography>

          <UserAutocomplete readonly />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="مبلغ"
              name="cost"
              type="number"
              value={formData.cost}
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
            <DatePicker
              defaultValue={new Date(2022, 1, 1, 12)}
              slotProps={{
                desktopPaper: {
                  dir: 'rtl'
                },
                mobilePaper: {
                  dir: 'rtl'
                }
              }}
            />
          </Box>
          <TextField label="توضیحات" name="description" multiline rows={3} value={formData.description} onChange={handleChange} fullWidth />

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
              لغو
            </Button>
            <Button variant="contained" color="primary" onClick={handleSave}>
              ذخیره
            </Button>
          </Stack>
        </Stack>
      </MainCard>
    </Modal>
  );
};

export default AddIncomeModal;

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
