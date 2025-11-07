'use client';

// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import HeaderSection from 'components/HomePage/HeaderSection';
import FooterSection from 'components/HomePage/FooterSection';

const HeaderWrapper = styled('div')(({ theme }) => ({
  paddingTop: 30,
  overflowX: 'hidden',
  overflowY: 'clip',
  background: 'white',
  [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')({
  paddingTop: 100,
  paddingBottom: 100
});

const Home = () => {
  const theme = useTheme();
  return (
    <>
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'dark.900', pb: 0 }}>
        <FooterSection />
      </SectionWrapper>
    </>
  );
};

export default Home;
