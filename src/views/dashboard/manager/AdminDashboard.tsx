'use client';

import React from 'react';

//styles
import { Grid, useTheme } from '@mui/material';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

//components
import PaidList from 'customs/PaidList';
import IncomeList from 'customs/IncomeList';
import DeptorsList from 'customs/DeptorsList';
import RevenueCard from 'ui-component/cards/RevenueCard';

const AdminDashboard: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1 }}
            primary="موجودی صندوق"
            secondary="$42,562"
            content="$50,032 ماه گذشته"
            iconPrimary={MonetizationOnTwoToneIcon}
            color={theme.palette.secondary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1, height: 125 }}
            primary="طلب از ساکنین"
            secondary="486"
            iconPrimary={AccountCircleTwoTone}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <DeptorsList />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <IncomeList />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <PaidList />
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
type Props = {};
