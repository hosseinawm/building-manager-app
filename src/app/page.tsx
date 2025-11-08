'use client';

// ==============================|| HOME PAGE ||============================== //
// import { Box, Typography, Button } from '@mui/material';
// import Link from 'next/link';
// import HomeLayout from 'layout/HomeLayout';
import Home from 'views/Home';

// export default function HomePage() {
//   return (
//     <GuestGuard>
//       <Login />
//     </GuestGuard>
//   );
// }
export default function HomePage() {
  return <Home />;
  //   <HomeLayout>
  //     <Box
  //       sx={{
  //         height: '100vh',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         textAlign: 'center',
  //         background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)'
  //       }}
  //     >
  //       <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
  //         سامانه آنلاین مدیریت ساختمان
  //       </Typography>
  //       <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
  //         دسترسی به اطلاعات ساختمان فارغ از محدودیت زمان و مکان، برای مدیران و ساکنین.
  //       </Typography>
  //       <Button Component={Link} href="/panel" variant="contained" size="large">
  //         ورود به برنامه
  //       </Button>
  //     </Box>
  //   </HomeLayout>
  // );
}
