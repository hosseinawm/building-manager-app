// material-ui
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, Box, IconButton } from '@mui/material';

// assets
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DownloadIcon from '@mui/icons-material/Download';
// project imports
import MainCard from 'ui-component/cards/MainCard';

// ===========================|| DASHBOARD ANALYTICS - TOTAL REVENUE CARD ||=========================== //

const TotalRevenue: React.FC<Props> = () => {
  const successSX = { color: 'success.dark' };
  const errorSX = { color: 'error.main' };

  const handleDownloadClick = () => {
    console.log('downloaded');
  };

  return (
    <MainCard
      title={<Typography variant="h4">بدهکاران</Typography>}
      secondary={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="small" onClick={handleDownloadClick}>
            <DownloadIcon />
          </IconButton>
        </Box>
      }
    >
      <List
        component="nav"
        aria-label="main mailbox folders"
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
  );
};

export default TotalRevenue;
type Props = {};
