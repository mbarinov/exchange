import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import { FETCH_ACCOUNTS, FETCH_ACCOUNTS_SUCCESS } from './types';
import { fetchAccounts } from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Accounts actions', function() {
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
    {
      id: 3,
      symbol: '€',
      ticker: 'EUR',
      amount: 276.01,
    },
    {
      id: 4,
      symbol: '₽',
      ticker: 'RUB',
      amount: 41089,
    },
  ];

  it('should fetching accounts', () => {
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
});
