/* import axios from 'axios'; */
import { ADD_MESSAGE } from './actionTypes';

export function addMessage() {
  return function (dispatch) {
    const message = 'System messages go here';
    dispatch({ type: ADD_MESSAGE, message });
  };
}

/* Async request example */

/* export function fetchHospitals() {
  return async function (dispatch) {
    const message = await axios.get('/api/hospitals')
      .then(res => res.data.data);
    dispatch({ type: ADD_MESSAGE, message });
  };
} */

