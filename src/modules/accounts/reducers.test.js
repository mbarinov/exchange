import accountReducer from './reducers';
import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
  EXCHANGE,
} from './types';

describe('Accounts reducer', function() {
  const initialState = {
    isLoading: false,
    hasError: false,
    list: [],
  };

  it('should return initial state', function() {
    expect(accountReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_ACCOUNTS', function() {
    expect(accountReducer(initialState, { type: FETCH_ACCOUNTS })).toEqual({
      isLoading: true,
      hasError: false,
      list: [],
    });
  });

  it('should handle FETCH_ACCOUNTS_SUCCESS', function() {
    const accountsPayload = [
      {
        id: 1,
        symbol: '$',
        ticker: 'USD',
        amount: 1034.23,
      },
    ];

    expect(
      accountReducer(initialState, {
        type: FETCH_ACCOUNTS_SUCCESS,
        payload: { isSuccessful: true, data: accountsPayload },
      }),
    ).toEqual({
      isLoading: false,
      hasError: false,
      list: accountsPayload,
    });
  });

  it('should handle FETCH_ACCOUNTS_FAIL', function() {
    expect(
      accountReducer(initialState, {
        type: FETCH_ACCOUNTS_FAIL,
      }),
    ).toEqual({
      isLoading: false,
      hasError: true,
      list: [],
    });
  });

  it('should exchange currencies', () => {
    const state = {
      ...initialState,
      list: [
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
      ],
    };

    const nextState = accountReducer(state, {
      type: EXCHANGE,
      payload: {
        fromAccountId: 1,
        toAccountId: 2,
        amount: 200,
        rate: 0.795108,
      },
    });

    expect(nextState.list[0].amount).toBe(834.23);
    expect(nextState.list[1].amount).toBe(580.0016);
  });
});
