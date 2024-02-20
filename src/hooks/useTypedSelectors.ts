import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

// Типизирование useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
