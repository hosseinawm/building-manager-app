import { Box, Button, MenuItem, Modal, Stack, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';

const paymentTypes = [
  { value: 'repair', label: 'Repairing' },
  { value: 'gas', label: 'Gas Bills' },
  { value: 'electricity', label: 'Electricity' },
  { value: 'water', label: 'Water Bills' },
  { value: 'other', label: 'Other' }
];

const AddCostModal: React.FC<Props> = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    type: '',
    cost: '',
    date: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('saved');
    setOpen(false);
  };

  return (
    <Modal keepMounted open={open} onClose={() => setOpen(false)}>
      <MainCard
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

          boxShadow: 24
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 2 }}>
          ثبت کردن هزینه
        </Typography>
        <Stack spacing={2}>
          <TextField select label="نوع هزینه" name="type" value={formData.type} onChange={handleChange} fullWidth>
            {paymentTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            <Button size="large" variant="outlined" color="secondary" onClick={() => setOpen(false)}>
              لغو
            </Button>
            <Button size="large" variant="contained" color="primary" onClick={handleSave}>
              ذخیره
            </Button>
          </Stack>
        </Stack>
      </MainCard>
    </Modal>
  );
};

export default AddCostModal;

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
