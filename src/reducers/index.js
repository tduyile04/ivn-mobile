import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import postReducer from './posts';
import partyReducer from './party';
import notificationReducer from './notification';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  party: partyReducer,
  notification: notificationReducer
});
