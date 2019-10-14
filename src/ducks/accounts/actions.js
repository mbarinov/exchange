import { getAccounts } from 'api/accounts';
import {FETCH_ACCOUNTS, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAIL} from './types';

export const fetchAccounts = () => (dispatch) => {
	dispatch({
		type: FETCH_ACCOUNTS,
	});

	return getAccounts()
		.then((data) => {
			dispatch({type: FETCH_ACCOUNTS_SUCCESS, payload: data});
		}, () => {
			dispatch({type: FETCH_ACCOUNTS_FAIL});
		});
};
