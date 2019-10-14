import {getLatestRates} from 'api/rates';
import {
    FETCH_LATEST_RATES,
    FETCH_LATEST_RATES_SUCCESS,
    FETCH_LATEST_RATES_FAIL,
} from "./types";

export const fetchLastRates = () => (dispatch) => {
    dispatch({type: FETCH_LATEST_RATES});

    return getLatestRates()
        .then((data) => {
            dispatch({type: FETCH_LATEST_RATES_SUCCESS, payload: data});
        }, () => {
            dispatch({type: FETCH_LATEST_RATES_FAIL});
        });
};
