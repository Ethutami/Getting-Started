import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer/Index';

const midleware = [thunk];
export const store = createStore(reducer, applyMiddleware(...midleware));
