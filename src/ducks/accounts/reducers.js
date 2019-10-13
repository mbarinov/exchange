import {createReducer,} from '../../utils';
import {ADD_FUNDS,} from './types';

const accountReducer = createReducer({})({
	[ADD_FUNDS]: (state, action) => {
		return {
			...action.payload.data,
		};
	},
});

export default accountReducer;
