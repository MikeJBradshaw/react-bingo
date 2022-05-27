import { createStore, combineReducers } from 'redux';     
import app from './reducers/app';

const reducers = combineReducers({ app });                

// set up the store
const store = createStore(reducers);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;          
export default store;                                     
