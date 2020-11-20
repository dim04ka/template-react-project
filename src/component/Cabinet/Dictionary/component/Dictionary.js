import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useStyles } from '@cabinet/Dictionary/style'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const Dictionary = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={5} direction="column">
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Box component={NavLink} to={'/123'} className={classes.link}>
              <Box component={Typography} pr={2}>Добавить тему</Box>
              <AddCircleOutlineIcon />
            </Box>
          </Grid>
          <Grid item>
            <Box component={NavLink} to={'/123'} className={classes.link}>
              <Box component={Typography} pr={2}>Добавить слово</Box>
              <AddCircleOutlineIcon />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        123
      </Grid>
    </Grid>
  )
}

export default Dictionary
