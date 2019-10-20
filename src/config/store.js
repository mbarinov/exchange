import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { accounts, rates } from '../modules/index';

const logger = createLogger({
  collapsed: true,
});

export default () => {
  const store = createStore(
    combineReducers({
      accounts,
      rates,
    }),
    compose(
      applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
