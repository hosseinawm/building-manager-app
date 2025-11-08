import { LAYOUT_CONST } from 'constant';
// project imports
import useConfig from 'hooks/useConfig';
import { useDispatch, useSelector } from 'store';
import { openDrawer } from 'store/slices/menu';

import { Avatar, Box, Button, Link, Toolbar, useMediaQuery } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
// assets
import { IconMenu2 } from '@tabler/icons-react';

import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import MobileMenu from 'layout/HomeLayout/HomeHeader/MobileMenu';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

interface HeaderProps {
  hideToggle?: boolean;
  hideProfile?: boolean;
  hideLinks?: boolean;
}

const Header = ({ hideToggle, hideProfile, hideLinks }: HeaderProps) => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { drawerOpen } = useSelector((state) => state.menu);

  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  const { layout } = useConfig();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          [theme.breakpoints.down('md')]: {
            width: 'auto'
          }
        }}
      >
        <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        {!hideToggle && (layout === LAYOUT_CONST.VERTICAL_LAYOUT || (layout === LAYOUT_CONST.HORIZONTAL_LAYOUT && matchDownMd)) && (
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              overflow: 'hidden',
              transition: 'all .2s ease-in-out',
              background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
              color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
              '&:hover': {
                background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
                color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
              }
            }}
            onClick={() => dispatch(openDrawer(!drawerOpen))}
            color="inherit"
          >
            <IconMenu2 stroke={1.5} size="20px" />
          </Avatar>
        )}
      </Box>
      {!hideLinks && (
        <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between', sm: 'space-evenly' }, px: { xs: 4, md: 6 } }}>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
            <Button component={Link} href="/" color="inherit">
              خانه
            </Button>
            <Button component={Link} href="/about" color="inherit">
              درباره
            </Button>
            <Button component={Link} href="/contact" color="inherit">
              ارتباط با ما
            </Button>
            <Button component={Link} href="/panel" variant="outlined" sx={{ display: { xs: 'none', sm: 'flex' } }}>
              ورود به برنامه
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <MobileMenu />
          </Box>
        </Toolbar>
      )}
      <Box sx={{ flexGrow: 1 }} />
      {!hideProfile && <ProfileSection />}
    </>
  );
};

export default Header;
