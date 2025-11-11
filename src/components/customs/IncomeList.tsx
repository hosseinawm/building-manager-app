// material-ui
import { Box, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DownloadIcon from '@mui/icons-material/Download';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import React from 'react';
import AddIncomeModal from './AddIncomeModal';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const successSX = { color: 'success.dark' };
const errorSX = { color: 'error.main' };

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
      <AddIncomeModal open={open} setOpen={setOpen} />
    </>
  );
};

export default IncomeList;
