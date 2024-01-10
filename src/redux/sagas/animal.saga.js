import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

  function* fetchAllAnimals() {
    try {
      const animalsResponse = yield axios.get('/api/animals');
      yield put ({
        type: 'SET_ANIMALS',
        payload: animalsResponse.data
      });
    } catch (error) {
      console.log('Error in fetchAllAnimals: ', error);
    }
  }

  function* animalSaga() {
    yield takeLatest('FETCH_ANIMALS', fetchAllAnimals);
  }

export default animalSaga;