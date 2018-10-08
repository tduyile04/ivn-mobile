import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import postReducer from './posts';
import partyReducer from './party';
import searchReducer from './search';
import notificationReducer from './notification';
import aspirantsReducer from './aspirants';
import questionReducer from './questions'
import thoughtReducer from './thoughts';

export default combineReducers({
  auth: authReducer,
  aspirant: aspirantsReducer,
  user: userReducer,
  post: postReducer,
  party: partyReducer,
  search: searchReducer,
  notification: notificationReducer,
  question: questionReducer,
  thought: thoughtReducer
});
