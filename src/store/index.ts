import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './reducers';


// Да, я знаю что это deprecated подход и нужен toolkit, но для данной задачи не вижу смысла в ещё одной библиотеке
export const store = createStore(rootReducer, applyMiddleware(thunk));
