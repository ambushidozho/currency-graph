import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { useTypedSelector } from '../../hooks/useTypedSelectors';
import { useDispatch } from 'react-redux';
import { CurrencyNames, CurrencySymbols } from '../../Constants/constants';
import './Header.css';
import { CurrencyNameToSymbol, CurrencySymbolToName } from '../../utils/utils';

const items = ['$', '€', '¥'];

export const Header = () => {
    const { active } = useTypedSelector((state) => state.currency);

    let currencySymbol: string = CurrencyNameToSymbol(active);
    const dispatch = useDispatch();

    const setValue = (value: string) => {
        let result = CurrencySymbolToName(value);
        dispatch({ type: 'SET_ACTIVE_CURRENCY', payload: result });
        return;
    };
    return (
        <div className="header">
            <Theme preset={presetGpnDefault}>
                <ChoiceGroup
                    value={currencySymbol}
                    onChange={({ value }) => setValue(value)}
                    items={items}
                    getItemLabel={(item) => item}
                    multiple={false}
                    name="ChoiceGroupExample"
                />
            </Theme>
        </div>
    );
};
