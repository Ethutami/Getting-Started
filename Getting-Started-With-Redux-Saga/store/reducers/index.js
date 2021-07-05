// Fungsi reducer :
// 1. Combine all reducers
import {combineReducers} from 'redux'
import moviesReducer from './moviesReducer'

export default combineReducers({
    moviesReducer,
    // reducer2,
})