'use client';

import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import { Grid } from '@mui/material';
import IncomeList from 'customs/IncomeList';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import PaidList from 'customs/PaidList';
import React from 'react';
import RevenueCard from 'ui-component/cards/RevenueCard';
import TotalRevenue from 'components/widgets/Data/totalRevenue';
import { useTheme } from '@mui/material/styles';

const AdminDashboard: React.FC<Props> = () => {
  const theme = useTheme();
  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1 }}
            primary="موجودی"
            secondary="$42,562"
            content="$50,032 ماه گذشته"
            iconPrimary={MonetizationOnTwoToneIcon}
            color={theme.palette.secondary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1 }}
            primary="طلب از ساکنین"
            secondary="486"
            content="20% Increase"
            iconPrimary={AccountCircleTwoTone}
            color={theme.palette.primary.main}
          />
        </Grid>
        <Grid item xs={12} lg={4} md={6}>
          <TotalRevenue title="بدهکاران" />
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
