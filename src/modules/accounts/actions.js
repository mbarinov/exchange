import { getAccounts } from 'api/accounts';
import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
  EXCHANGE,
} from './types';
import { ratesSelectors } from 'modules/rates';

export const fetchAccounts = () => dispatch => {
  dispatch({
    type: FETCH_ACCOUNTS,
  });

  return getAccounts().then(
    data => {
      dispatch({ type: FETCH_ACCOUNTS_SUCCESS, payload: data });
    },
    () => {
      dispatch({ type: FETCH_ACCOUNTS_FAIL });
    },
  );
};

export const exchange = ({ fromAccountId, toAccountId, amount }) => (
  dispatch,
  getState,
) => {
  const { accounts, rates } = getState();

  if (accounts && accounts.list) {
    const getAccountById = id => accounts.list.find(i => i.id === id);

    const from = getAccountById(fromAccountId);
    const to = getAccountById(toAccountId);

    const { rate } = ratesSelectors.getCurrentRate({ rates })(
      from.ticker,
      to.ticker,
    );

    if (from.amount >= amount) {
      dispatch({
        type: EXCHANGE,
        payload: {
          fromAccountId,
          toAccountId,
          amount,
          rate,
        },
      });
    }
  }
};
