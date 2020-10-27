import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box, Typography } from '@material-ui/core';
import { compose } from 'redux';



const App = (props) => {
  
  const renderField = ({ input, label, type }) => (
    <input {...input} type={type} className="form-control" />
  );
  
  return (
    <Box>
      <form onSubmit={props.handleSubmit}>
      <Field
        name="firstName"
        component={renderField}
        type="text"
      />
      </form>

    </Box>
  )
}

export default compose(
  reduxForm({
    form: 'simple',
  })
)(App)

