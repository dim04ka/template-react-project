import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box, Typography } from '@material-ui/core';
import { compose } from 'redux';
import StartPage from '@cabinet/StartPage'


const App = (props) => {
 
  return (
    <Box>
      <StartPage />
    </Box>
  )
}

export default compose(
)(App)

