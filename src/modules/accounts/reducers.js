import {createReducer,} from 'utils';
import {FETCH_ACCOUNTS, FETCH_ACCOUNTS_SUCCESS, FETCH_ACCOUNTS_FAIL} from './types';

const initialState = {
    isLoading: false,
    hasError: false,
    list: [],
};

const accountReducer = createReducer(initialState)({
    [FETCH_ACCOUNTS]: (state) => {
        return {
            ...state,
            isLoading: true,
        };
    },
    [FETCH_ACCOUNTS_SUCCESS]: (state, {payload: {data}}) => {
        return {
            isLoading: false,
            hasError: false,
            list: data
        }
    },
    [FETCH_ACCOUNTS_FAIL]: (state) => ({
        ...state,
        isLoading: false,
        hasError: true,
    }),
});

export default accountReducer;
