import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import postReducer from './posts'
import notificationReducer from './notification'

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  notification: notificationReducer
});
