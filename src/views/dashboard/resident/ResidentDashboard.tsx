'use client';

//styles
import { Button, Grid, useTheme } from '@mui/material';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

//components
import RevenueCard from 'ui-component/cards/RevenueCard';
import IncomeList from 'customs/IncomeList';
import PaidList from 'customs/PaidList';
// import { color } from 'framer-motion';

const ResidentDashboard: React.FC<Props> = () => {
  const theme = useTheme();

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1, color: 'black' }}
            primary="موجودی صندوق"
            secondary="11"
            content="11 ماه گذشته"
            iconPrimary={MonetizationOnTwoToneIcon}
            color={theme.palette.warning.main}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RevenueCard
            sx={{ flex: 1, height: 125 }}
            primary="میزان شارژ قابل پرداخت"
            secondary="486"
            color={theme.palette.error.main}
            action={
              <Button
                variant="contained"
                size="medium"
                sx={{ background: theme.palette.primary.main, '&:hover': { background: theme.palette.primary.dark } }}
              >
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
