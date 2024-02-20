import { CurrencyNames, CurrencySymbols } from '../Constants/constants';

export const CurrencyNameToSymbol = (name: string) => {
    switch (name) {
        case CurrencyNames.dollars:
            return CurrencySymbols.dollars;
        case CurrencyNames.euro:
            return CurrencySymbols.euro;
        case CurrencyNames.yuan:
            return CurrencySymbols.yuan;
        default:
            return CurrencySymbols.dollars;
    }
};

export const CurrencySymbolToName = (symbol: string) => {
    switch (symbol) {
        case CurrencySymbols.dollars:
            return CurrencyNames.dollars;
        case CurrencySymbols.euro:
            return CurrencyNames.euro;
        case CurrencySymbols.yuan:
            return CurrencyNames.yuan;
        default:
            return CurrencyNames.dollars;
    }
};
