import { createReducer } from 'utils';
import {
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAIL,
  EXCHANGE,
} from './types';

const initialState = {
  isLoading: false,
  hasError: false,
  list: [],
};

const accountReducer = createReducer(initialState)({
  [FETCH_ACCOUNTS]: state => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [FETCH_ACCOUNTS_SUCCESS]: (state, { payload: { data } }) => {
    return {
      isLoading: false,
      hasError: false,
      list: data,
    };
  },
  [FETCH_ACCOUNTS_FAIL]: state => ({
    ...state,
    isLoading: false,
    hasError: true,
  }),
  [EXCHANGE]: (
    state,
    { payload: { fromAccountId, toAccountId, amount, rate } },
  ) => {
    const getAccountById = id => state.list.find(i => i.id === id);

    const from = getAccountById(fromAccountId);
    const to = getAccountById(toAccountId);

    const nextList = state.list.filter(i =>
      [fromAccountId, toAccountId].includes(i.id),
    );

    from.amount = from.amount - amount;
    to.amount = to.amount + amount * rate;

    nextList.push(from);
    nextList.push(to);

    return {
      ...state,
      list: nextList,
    };
  },
});

export default accountReducer;
