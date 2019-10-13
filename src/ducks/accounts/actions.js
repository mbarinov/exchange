import {ADD_FUNDS,} from './types';

export const addFunds = (accountId, amount) => (
	{
		type: ADD_FUNDS,
		payload: {
			accountId,
			amount,
		},
	});
