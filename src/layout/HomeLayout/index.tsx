'use client';

import { FC, ReactNode } from 'react';
import { AppBar, Box, Container, CssBaseline, Toolbar } from '@mui/material';
import { styled, Theme, useTheme } from '@mui/material/styles';
import HomeFooter from './HomeFooter';
import useConfig from 'hooks/useConfig';
import Header from 'layout/MainLayout/Header';

// ==============================|| STYLES ||============================== //

const Main = styled('main')(({ theme }: { theme: Theme }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  margin: 0,
  padding: 0,
  width: '100%',
  minHeight: 'calc(100vh - 88px)',
  marginTop: 88,
  [theme.breakpoints.down('sm')]: {
    padding: 0
  }
}));

// ==============================|| HOME LAYOUT ||============================== //

interface Props {
  children: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
  const theme = useTheme();
  const { container } = useConfig();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <Header hideToggle hideProfile />
        </Toolbar>
      </AppBar>
      <Main theme={theme}>
        <Container maxWidth={container ? 'lg' : false} {...(!container && { sx: { px: { xs: 0 } } })}>
          {children}
        </Container>
      </Main>
      <HomeFooter />
    </Box>
  );
};

export default HomeLayout;
