import {
    CurrenciesAction,
    CurrenciesActionTypes,
    Currency,
    CurrencyState,
} from '../../types/currency';

const initialState: CurrencyState = {
    currencies: new Map<string, Currency[]>(),
    loading: false,
    error: null,
    active: 'Курс доллара',
};

export const currencyReducer = (
    state = initialState,
    action: CurrenciesAction
): CurrencyState => {
    switch (action.type) {
        case CurrenciesActionTypes.FETCH_CURRENCIES:
            return {
                ...state,
                currencies: new Map<string, Currency[]>(),
                loading: true,
                error: null,
            };
        case CurrenciesActionTypes.FETCH_CURRENCIES_SUCCESS:
            const currencies = new Map(state.currencies);
            action.payload.forEach((currency: Currency) => {
                currencies.has(currency.indicator)
                    ? currencies.get(currency.indicator)?.push(currency)
                    : currencies.set(currency.indicator, [currency]);
            });
            return {
                ...state,
                currencies: currencies,
                loading: false,
                error: null,
            };
        case CurrenciesActionTypes.FETCH_CURRENCIES_ERROR:
            return {
                ...state,
                currencies: new Map<string, Currency[]>(),
                loading: false,
                error: action.payload,
            };
        case CurrenciesActionTypes.SET_ACTIVE_CURRENCY:
            return {
                ...state,
                active: action.payload,
            };
        default:
            return state;
    }
};
