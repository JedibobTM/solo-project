import { combineReducers } from "redux";

const animal = (state=[], action) => {
    switch (action.type) {
      case 'SET_ANIMALS':
        return action.payload;
      default:
        return state;
    }
  }

const selectedAnimal = (state={}, action) => {
if (action.type === 'SELECT_ANIMAL') {
    console.log("Selected animal data:", action.payload);
    return action.payload;
}
return state;
}

export default combineReducers({
    animal,
    selectedAnimal
});