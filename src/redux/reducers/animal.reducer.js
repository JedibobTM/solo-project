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
  if (action.type === 'REMOVE_PAGE') {
    const indexToRemove = action.payload;

    
  }

  if (action.type === 'EDIT_FORM') {
    const newValue = action.payload.newValue;
    const editedField = action.payload.newFieldName
    return {...state, [editedField]: newValue}
  }
return state;
}

export default combineReducers({
    animal,
    selectedAnimal
});
