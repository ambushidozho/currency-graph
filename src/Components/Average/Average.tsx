import { useTypedSelector } from '../../hooks/useTypedSelectors';
import './Average.css';
import { CurrencyNameToSymbol } from '../../utils/utils';

export const Average = () => {
    const { currencies, active } = useTypedSelector((state) => state.currency);

    const currentCurrency = currencies.get(active);

    if (!currentCurrency) return;

    let currencySymbol: string = CurrencyNameToSymbol(active);

    // подсчет среднего значения
    const average =
        currentCurrency?.reduce((sum, currency) => sum + currency.value, 0) /
        currentCurrency?.length;

    return (
        <div className="chart__average">
            <h2 className="chart__average-title big-text">Среднее за период</h2>
            <div className="chart__average-value-container medium-text">
                <span className="chart__average-value medium-text">
                    {average}
                </span>
                ₽
            </div>
        </div>
    );
};
