'use client';

//styles
import { Button, Grid, useTheme } from '@mui/material';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

//components
import RevenueCard from 'ui-component/cards/RevenueCard';
import IncomeList from 'customs/IncomeList';
import PaidList from 'customs/PaidList';

const ResidentDashboard: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1 }}
            primary="موجودی صندوق"
            secondary="11"
            content="11 ماه گذشته"
            iconPrimary={MonetizationOnTwoToneIcon}
            color={theme.palette.secondary.main}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1, height: 125 }}
            primary="میزان شارژ قابل پرداخت"
            secondary="486"
            color={theme.palette.primary.main}
            action={
              <Button variant="contained" size="medium" color="secondary">
                پرداخت شارژ
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <IncomeList />
        </Grid>
        <Grid item xs={12} md={6}>
          <PaidList />
        </Grid>

        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default ResidentDashboard;
type Props = {};
