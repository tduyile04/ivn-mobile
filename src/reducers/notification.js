import { handleActions } from "redux-actions";
import {
  getNotificationsPending,
  getNotificationsSuccess,
  getNotificationsFailure,
  getUnreadNotifications,
  incrementUnreadNotifications,
  addNotificationSuccess
} from '../actions';

const defaultState = {
  notifications: [],
  loading: false,
  error: '',
  page: 1,
  limit: 20,
  new: 0
};

export default handleActions({
  [getNotificationsPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [getNotificationsSuccess](state = defaultState, { payload: { notifications } }) {
    return {
      ...state,
      notifications: [ ...state.notifications, ...notifications ],
      page: state.page + 1,
      loading: false,
      error: ''
    }
  },
  [getNotificationsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
  [getUnreadNotifications](state = defaultState) {
    return {
      ...state,
      new: 0
    }
  },
  [incrementUnreadNotifications](state = defaultState) {
    return {
      ...state,
      new: state.new + 1
    }
  },
  [addNotificationSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      notifications: [payload, ...state.notifications]
    }
  }
}, defaultState);
