import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backdropFilter: 'blur(6px)',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        py: 4,
        mt: 'auto'
      }}
    >
      <Stack spacing={3} alignItems="center" sx={{ textAlign: 'center', px: 2 }}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          شارژ شهرک
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1.5, sm: 3 }} alignItems="center">
          <MuiLink component={Link} href="/" underline="none" color="inherit" variant="body1">
            سوالات متداول
          </MuiLink>
          <MuiLink component={Link} href="/" underline="none" color="inherit" variant="body1">
            قوانین و شرایط استفاده
          </MuiLink>
          <MuiLink component={Link} href="/" underline="none" color="inherit" variant="body1">
            درباره ما
          </MuiLink>
          <MuiLink component={Link} href="/" underline="none" color="inherit" variant="body1">
            ولاگ
          </MuiLink>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="caption" dir="ltr" sx={{ display: 'inline-block', textAlign: 'left' }}>
            &copy; 2025 ● Built With ♥️
          </Typography>
          <Typography variant="caption">تمامی حقوق محفوظ می باشد.</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
