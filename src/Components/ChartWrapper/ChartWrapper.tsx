import { useDispatch } from 'react-redux';
import { ReactECharts } from '../../Echarts/ReactECharts';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useEffect } from 'react';
import { fetchCurrencies } from '../../store/action-creators/currency';
import { Currency } from '../../types/currency';
import { CurrencyNames, CurrencySymbols } from '../../Constants/constants';
import './ChartWrapper.css';
import { CurrencyNameToSymbol } from '../../utils/utils';

export const ChartWrapper = () => {
    const { currencies, loading, error, active } = useTypedSelector(
        (state) => state.currency
    );
    const dispatch = useDispatch();

    // Функция формирующая опции для графика
    const makeOption = () => {
        // Получаем нужную валюту и сортируем по дате
        const currentCurrency = currencies
            .get(active)
            ?.sort((a: Currency, b: Currency) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);

                if (dateA === dateB) {
                    return 0;
                }
                return dateA < dateB ? -1 : 1;
            });

        let currencySymbol: string = CurrencyNameToSymbol(active);

        if (!currentCurrency) {
            return {};
        } // проверка на наличие валюты

        return {
            title: {
                text: `${active}, ${currencySymbol}/₽`,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params: any) {
                    let date = params[0].axisValueLabel;
                    let currencyValue = params[0].data;
                    let pointColor = params[0].color;
                    let tooltipString = `
                    <div style="font-weight: bold; color: #3c94fc;">${date}</div>
                    <div><span style="color: ${pointColor};">&#9679;${active}: </span> <span style="font-weight: bold; color: #3c94fc;">${currencyValue}</span></div>
                  `;
                    return tooltipString;
                },
            },
            legend: {
                show: false,
            },
            xAxis: {
                type: 'category',
                data: currentCurrency.map((currency) => currency.month),
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    type: 'line',
                    data: currentCurrency.map((currency) => currency.value),
                    lineStyle: {
                        color: '#ff8c0c',
                        width: 3,
                    },
                    symbol: 'circle',
                    itemStyle: {
                        color: '#4e4e4e',
                    },
                },
            ],
        };
    };

    useEffect(() => {
        dispatch(fetchCurrencies());
    }, []);

    if (loading) {
        return <h1 className="big-text">Loading...</h1>;
    }

    if (error) {
        return <h1 className="big-text">{error}</h1>;
    }

    return (
        <div className="chart__container">
            <ReactECharts option={makeOption()} theme="light" />
        </div>
    );
};
