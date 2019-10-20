import { createType } from 'utils';

const prefix = 'accounts';

export const FETCH_ACCOUNTS = createType(prefix, 'FETCH_ACCOUNTS');
export const FETCH_ACCOUNTS_SUCCESS = createType(
  prefix,
  'FETCH_ACCOUNTS_SUCCESS',
);
export const FETCH_ACCOUNTS_FAIL = createType(prefix, 'FETCH_ACCOUNTS_FAIL');

export const EXCHANGE = createType(prefix, 'EXCHANGE');
