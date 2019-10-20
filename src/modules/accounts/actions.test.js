import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';

import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
} from './types';
import { fetchAccounts } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Accounts actions', function() {
  afterEach(() => fetchMock.restore());

  const body = [
    {
      id: 1,
      symbol: '$',
      ticker: 'USD',
      amount: 1034.23,
    },
    {
      id: 2,
      symbol: '£',
      ticker: 'GBP',
      amount: 420.98,
    },
  ];

  it('should fetching accounts', () => {
    fetchMock.getOnce('http://localhost:4000/accounts', {
      body,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_ACCOUNTS },
      {
        type: FETCH_ACCOUNTS_SUCCESS,
        payload: {
          isSuccessful: true,
          data: body,
        },
      },
    ];

    const store = mockStore({ isLoading: false, hasError: false, list: [] });

    return store.dispatch(fetchAccounts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail', function() {
    fetchMock.getOnce('http://localhost:4000/accounts', 500);

    const expectedActions = [
      { type: FETCH_ACCOUNTS },
      { type: FETCH_ACCOUNTS_FAIL },
    ];

    const store = mockStore({ isLoading: false, hasError: false, list: [] });

    return store.dispatch(fetchAccounts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
