import { ADD_MESSAGE } from '../actions/actionTypes';

export function addMessage(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    default:
      return state;
  }
}

