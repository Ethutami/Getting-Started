// Fungsi store :
// 1.untuk mengcreate store
// 2.Implementasi Middleware
// 3. menyambungkan Store(redux) kita dengan reducer
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);
export default store;