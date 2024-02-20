export type Currency = {
    date: string;
    month: string;
    indicator: string;
    value: number;
};

export interface CurrencyState {
    currencies: Map<string, Currency[]>;
    loading: boolean;
    error: null | string;
    active: string;
}

export enum CurrenciesActionTypes {
    FETCH_CURRENCIES = 'FETCH_CURRENCIES',
    FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS',
    FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR',
    SET_ACTIVE_CURRENCY = 'SET_ACTIVE_CURRENCY',
}

interface FetchCurrenciesAction {
    type: typeof CurrenciesActionTypes.FETCH_CURRENCIES;
}

interface FetchCurrenciesSuccessAction {
    type: typeof CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS;
    payload: any[];
}

interface FetchCurrenciesErrorAction {
    type: typeof CurrenciesActionTypes.FETCH_CURRENCIES_ERROR;
    payload: string;
}

interface SetActiveCurrencyAction {
    type: typeof CurrenciesActionTypes.SET_ACTIVE_CURRENCY;
    payload: string;
}

export type CurrenciesAction =
    | FetchCurrenciesAction
    | FetchCurrenciesSuccessAction
    | FetchCurrenciesErrorAction
    | SetActiveCurrencyAction;
