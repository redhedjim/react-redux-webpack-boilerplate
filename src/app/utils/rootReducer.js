import { combineReducers } from 'redux';
import { addMessage } from '../flashMessages/reducers/flashMessagesReducer';

export default combineReducers({
  messages: addMessage,
});
