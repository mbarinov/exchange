import { createType } from 'utils';

const prefix = 'rates';

export const FETCH_LATEST_RATES = createType(prefix, 'FETCH_LATEST_RATES');
export const FETCH_LATEST_RATES_SUCCESS = createType(prefix, 'FETCH_LATEST_RATES_SUCCESS');
export const FETCH_LATEST_RATES_FAIL = createType(prefix, 'FETCH_LATEST_RATES_FAIL');
