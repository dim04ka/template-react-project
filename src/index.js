import ReactDOM from 'react-dom';
import React from 'react';
import App from '@component/App'; //eslint-disable-line 
import { Provider } from 'react-redux';
import { store } from '@store/store'; //eslint-disable-line

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
