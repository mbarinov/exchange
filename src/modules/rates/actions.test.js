import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import {
  FETCH_LATEST_RATES,
  FETCH_LATEST_RATES_SUCCESS,
  FETCH_LATEST_RATES_FAIL,
} from './types';
import { fetchLastRates } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Rates actions', function() {
  afterEach(() => fetchMock.restore());

  const initialState = {
    isLoading: false,
    hasError: false,
    timestamp: null,
    base: null,
    rates: [],
  };

  it('should fetch latest rates', function() {
    const body = {
      disclaimer: 'Usage subject to terms: https://openexchangerates.org/terms',
      license: 'https://openexchangerates.org/license',
      timestamp: 1571079600,
      base: 'USD',
      rates: {
        GBP: 0.795108,
        RUB: 64.281,
        EUR: 0.906567,
      },
    };

    fetchMock.getOnce('*', {
      body,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_LATEST_RATES },
      {
        type: FETCH_LATEST_RATES_SUCCESS,
        payload: {
          isSuccessful: true,
          data: body,
        },
      },
    ];

    const store = mockStore(initialState);

    store.dispatch(fetchLastRates()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail', function() {
    fetchMock.getOnce('*', 500);

    const expectedActions = [
      {
        type: FETCH_LATEST_RATES,
      },
      {
        type: FETCH_LATEST_RATES_FAIL,
      },
    ];

    const store = mockStore(initialState);

    store.dispatch(fetchLastRates()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
