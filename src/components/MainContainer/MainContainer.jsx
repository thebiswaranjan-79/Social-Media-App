import * as React from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import UserList from '../UserList/UserList';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';

export default function MainContainer() {
  return (
    <Box container sx={{ mt : '3rem'}}>
      <Grid  container alignItems="start" justifyContent="center"  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={0} md={3}>
            {/* Users */}
        <UserList/>
        </Grid>
        <Grid container
              alignItems="center"
              justifyContent="center" 
              direction="column"
               md={8}>

                {/* POSTS */}
              <PostCardList/>
        </Grid>
      </Grid>
    </Box>
  );
}