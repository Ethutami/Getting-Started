// Fungsinya :
// - Nge set(CRUD) data ke reducer
// - Fetch data axios
import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

const getData = () => {
  return axios({
    method: 'GET',
    url:
      'https://api.themoviedb.org/3/movie/popular?api_key=184906d1f379043dc33bceb2785a5fa2&language=en-US&page=1',
  })
    .then(res => res.data.results)
    .catch(err => err);
};

function* fetchData() {
  const result = yield call(getData);
  yield put({
    type: 'SET_DATA',
    payload: result,
  });
}

function* setLoadingStatus() {
  yield put({
    type: 'SET_LOADING',
  });
}

function* rootSagas() {
  yield takeLatest('FETCH_REQUEST', fetchData);
  yield takeLatest('SET_LOADING_REQUEST', setLoadingStatus);
}

export default rootSagas;
