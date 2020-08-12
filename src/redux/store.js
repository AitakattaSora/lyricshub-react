import { createStore, combineReducers } from 'redux';
import { queriesReducer } from './reducers/queries-reducer';

const reducers = combineReducers({
  queries: queriesReducer,
});

export const store = createStore(reducers);
