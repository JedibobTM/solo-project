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

  function* createAnimal(action) {
    try {
      const response = yield axios({
        method: 'POST',
        url: '/api/animals',
        data: action.payload
      })
      yield put({
        type: 'FETCH_ANIMALS'
      })
    } catch (error) {
      console.log('Saga function createAnimal failed: ', error);
    }
  }

  function* animalSaga() {
    yield takeLatest('FETCH_ANIMALS', fetchAllAnimals);
    yield takeLatest('SAGA/CREATE_ANIMAL', createAnimal);
  }

export default animalSaga;