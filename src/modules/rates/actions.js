import { getLatestRates } from 'api/rates';
import {
  FETCH_LATEST_RATES,
  FETCH_LATEST_RATES_SUCCESS,
  FETCH_LATEST_RATES_FAIL,
} from './types';

export const fetchLastRates = () => dispatch => {
  dispatch({ type: FETCH_LATEST_RATES });

  return getLatestRates().then(
    data => {
      dispatch({ type: FETCH_LATEST_RATES_SUCCESS, payload: data });
    },
    () => {
      dispatch({ type: FETCH_LATEST_RATES_FAIL });
    },
  );
};

export const mockRates = () => dispatch => {
  dispatch({ type: FETCH_LATEST_RATES });

  const data = {
    base: 'USD',
    timestamp: Date.now(),
    rates: {
      USD: (Math.random() * 10).toFixed(2),
      GBP: (Math.random() * 10).toFixed(2),
      EUR: (Math.random() * 10).toFixed(2),
      RUB: (Math.random() * 10).toFixed(2),
    },
  };

  return Promise.resolve({ data }).then(data => {
    dispatch({ type: FETCH_LATEST_RATES_SUCCESS, payload: data });
  });
};
