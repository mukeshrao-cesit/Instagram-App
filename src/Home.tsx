import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideBarContainer } from './SideBar/SideBarContainer';
import { MiddleComp } from './Middle_Container/MiddleComp';

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2.5}>
          <SideBarContainer />
        </Grid>
        <Grid item xs={5}>
          <MiddleComp />
        </Grid>
        <Grid item xs>
          <p>Hello3</p>
        </Grid>
      </Grid>
    </Box>
  );
};
