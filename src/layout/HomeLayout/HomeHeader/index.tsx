import Link from 'next/link';
import { AppBar, Toolbar, Box, Button, Typography } from '@mui/material';
import MobileMenu from './MobileMenu/index';

export default function HomeHeader() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={5}
      sx={{
        backdropFilter: 'blur(10px)',
        bgcolor: 'rgba(255,255,255,0.8)'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between', sm: 'space-evenly' }, px: { xs: 4, md: 6 } }}>
        <Typography component={Link} href="/" variant="h2" sx={{ fontWeight: 600, textDecoration: 'none' }}>
          شارژ شهرک
        </Typography>

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
        </Box>
        <Button component={Link} href="/panel" variant="outlined" sx={{ display: { xs: 'none', sm: 'flex' } }}>
          ورود به برنامه
        </Button>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <MobileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
