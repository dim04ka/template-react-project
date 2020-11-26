import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Box } from '@material-ui/core';
import { compose } from 'redux';

const App = ({ handleSubmit }) => {
  const renderField = ({ input, type }) => (
    <input {...input} type={type} className="form-control" />
  );

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          component={renderField}
          type="text"
        />
      </form>

    </Box>
  );
};

export default compose(
  reduxForm({
    form: 'simple',
  })
)(App);
