import expect from 'expect';
import ratesReducers from './reducers';
import {
  FETCH_LATEST_RATES,
  FETCH_LATEST_RATES_SUCCESS,
  FETCH_LATEST_RATES_FAIL,
} from './types';

describe('Rates reducer', function() {
  const initialState = {
    isLoading: false,
    hasError: false,
    timestamp: null,
    base: null,
    rates: [],
  };

  it('should return initial state', function() {
    expect(ratesReducers(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_LATEST_RATES', function() {
    expect(
      ratesReducers(initialState, {
        type: FETCH_LATEST_RATES,
      }),
    ).toEqual({
      isLoading: true,
      hasError: false,
      timestamp: null,
      base: null,
      rates: [],
    });
  });

  it('should handle FETCH_LATEST_RATES_SUCCESS', function() {
    expect(
      ratesReducers(initialState, {
        type: FETCH_LATEST_RATES_SUCCESS,
        payload: {
          isSuccessful: true,
          data: {
            disclaimer:
              'Usage subject to terms: https://openexchangerates.org/terms',
            license: 'https://openexchangerates.org/license',
            timestamp: 1571079600,
            base: 'USD',
            rates: {
              GBP: 0.795108,
              RUB: 64.281,
              EUR: 0.906567,
            },
          },
        },
      }),
    ).toEqual({
      isLoading: false,
      hasError: false,
      timestamp: 1571079600,
      base: 'USD',
      rates: {
        GBP: 0.795108,
        RUB: 64.281,
        EUR: 0.906567,
      },
    });
  });

  it('should handle FETCH_LATEST_RATES_FAIL', function() {
    expect(
      ratesReducers(initialState, {
        type: FETCH_LATEST_RATES_FAIL,
      }),
    ).toEqual({
      isLoading: false,
      hasError: true,
      timestamp: null,
      base: null,
      rates: [],
    });
  });
});
