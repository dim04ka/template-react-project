import { createStore, applyMiddleware, compose } from 'redux'; //eslint-disable-line
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const middlewares = [thunk];

const createReduxStore = () => {
  let composeFunction;
  /* eslint-disable */
  if (process.env.NODE_ENV !== 'production' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    /* eslint-enable */
  } else {
    composeFunction = compose;
  }

  return createStore(rootReducer, composeFunction(applyMiddleware(...middlewares)));
};

const store = createReduxStore();
const { dispatch, getState } = store;

export { store, dispatch, getState };
