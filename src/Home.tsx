import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideBarContainer } from './Main_Page/SideBarContainer';
import { MiddleComp } from './Main_Page/MiddleComp';

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2.5} style={{ borderRight: '1px solid #8080806b' }}>
          <SideBarContainer />
        </Grid>
        <Grid item xs={5.5} style={{ borderRight: '1px solid #8080806b' }}>
          <MiddleComp />
        </Grid>
        <Grid item xs>
          <p>Hello3</p>
        </Grid>
      </Grid>
    </Box>
  );
};
