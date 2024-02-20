import { Dispatch } from 'redux';
import { CurrenciesAction, CurrenciesActionTypes } from '../../types/currency';
import axios from 'axios';
import { URL } from '../../Constants/constants';

export const fetchCurrencies = () => {
    return async (dispatch: Dispatch<CurrenciesAction>) => {
        try {
            dispatch({
                type: CurrenciesActionTypes.FETCH_CURRENCIES,
            });
            const response = await axios.get(URL);
            dispatch({
                type: CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: CurrenciesActionTypes.FETCH_CURRENCIES_ERROR,
                payload: 'Произошла ошибка при загрузке данных',
            });
        }
    };
};
