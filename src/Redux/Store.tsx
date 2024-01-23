import {MyReducer} from './Reducer';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const RootReducer = combineReducers({MyReducer});

export const Store = configureStore({
  reducer: RootReducer,
});
