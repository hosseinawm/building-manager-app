// material-ui
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { DatePicker } from '@mui/x-date-pickers';
import DownloadIcon from '@mui/icons-material/Download';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
import UserAutocomplete from './UserAutocomplete';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const successSX = { color: 'success.dark' };
const errorSX = { color: 'error.main' };

const paymentTypes = [
  { value: 'repair', label: 'Repairing' },
  { value: 'gas', label: 'Gas Bills' },
  { value: 'electricity', label: 'Electricity' },
  { value: 'water', label: 'Water Bills' },
  { value: 'other', label: 'Other' }
];

const IncomeList: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleDownloadClick = () => {
    console.log('Download clicked');
  };

  const handleAddClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <MainCard
        title={<Typography variant="h4">درآمدها</Typography>}
        secondary={
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" onClick={handleDownloadClick}>
              <DownloadIcon />
            </IconButton>
            <IconButton size="small" onClick={handleAddClick}>
              <AddIcon />
            </IconButton>
          </Box>
        }
      >
        <List
          component="nav"
          sx={{
            '& svg': {
              width: 32,
              my: -0.75,
              ml: -0.75,
              mr: 0.75
            }
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ArrowDropUpIcon sx={successSX} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <span>Bitcoin</span>
                  <Typography sx={successSX}>+ $145.85</Typography>
                </Stack>
              }
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <ArrowDropDownIcon sx={errorSX} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <span>Ethereum</span>
                  <Typography sx={errorSX}>- $6.368</Typography>
                </Stack>
              }
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemIcon>
              <ArrowDropUpIcon sx={successSX} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <span>Ripple</span>
                  <Typography sx={successSX}>+ $458.63</Typography>
                </Stack>
              }
            />
          </ListItemButton>
        </List>
      </MainCard>
      <MyModal open={open} setOpen={setOpen} />
    </>
  );
};

const MyModal: React.FC<Props> = ({ open, setOpen }) => {
  const [formData, setFormData] = React.useState({
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
    console.log('Form submitted:', formData);
    setOpen(false);
    setFormData({ type: '', cost: '', date: '', description: '' });
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

export default IncomeList;
type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
