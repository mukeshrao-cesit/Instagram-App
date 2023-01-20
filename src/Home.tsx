import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { SideBarContainer } from './SideBar/SideBarContainer';

export const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={2.5}>
          <SideBarContainer />
        </Grid>
        <Grid item xs={5}>
          <p>Hello2</p>
        </Grid>
        <Grid item xs>
          <p>Hello3</p>
        </Grid>
      </Grid>
    </Box>
  );
};
