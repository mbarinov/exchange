import { createReducer } from 'utils';
import {
  FETCH_LATEST_RATES,
  FETCH_LATEST_RATES_SUCCESS,
  FETCH_LATEST_RATES_FAIL,
} from './types';

const initialState = {
  isLoading: false,
  hasError: false,
  timestamp: null,
  base: null,
  rates: [],
};

const ratesReducers = createReducer(initialState)({
  [FETCH_LATEST_RATES]: state => ({
    ...state,
    isLoading: true,
  }),
  [FETCH_LATEST_RATES_SUCCESS]: (state, { payload }) => {
    if (state.timestamp > payload.data.timestamp) {
      return state;
    }

    return {
      ...state,
      isLoading: false,
      rates: payload.data.rates,
      timestamp: payload.data.timestamp,
      base: payload.data.base,
    };
  },
  [FETCH_LATEST_RATES_FAIL]: state => ({
    ...state,
    isLoading: false,
    hasError: true,
  }),
});

export default ratesReducers;
