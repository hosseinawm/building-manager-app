'use client';
import { FC } from 'react';

import Header from 'layout/MainLayout/Header';

import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material';

const MainContent = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3)
}));

const PanelLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <Header hideToggle hideLinks />
        </Toolbar>
      </AppBar>

      <MainContent>
        <Toolbar />
        {children}
      </MainContent>
    </Box>
  );
};

export default PanelLayout;
