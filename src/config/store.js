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
    compose(applyMiddleware(thunk, logger)),
  );

  if (module.hot) {
    module.hot.accept('../modules', () => {
      const nextRootReducer = require('../modules/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
