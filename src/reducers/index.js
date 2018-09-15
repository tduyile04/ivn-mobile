import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import postReducer from './posts';
import partyReducer from './party';
import notificationReducer from './notification';
import aspirantsReducer from './aspirants';

export default combineReducers({
  auth: authReducer,
  aspirant: aspirantsReducer,
  user: userReducer,
  post: postReducer,
  party: partyReducer,
  notification: notificationReducer
});
