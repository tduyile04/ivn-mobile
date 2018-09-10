import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_NOTIFICATIONS_PENDING = 'GET_NOTIFICATIONS_PENDING';
const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';
const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE';

export const getNotificationsPending = createAction(GET_NOTIFICATIONS_PENDING)
export const getNotificationsSuccess = createAction(GET_NOTIFICATIONS_SUCCESS)
export const getNotificationsFailure = createAction(GET_NOTIFICATIONS_FAILURE)

export const getNotifications = (page = 1, limit = 20) => async (dispatch) => {
  dispatch(getNotificationsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/users/notifications?limit=${limit}&page=${page}`);
    return dispatch(getNotificationsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getNotificationsFailure(errorMessage))
  }
}

const CLEAR_UNREAD_NOTIFICATIONS = 'CLEAR_UNREAD_NOTIFICATIONS';

export const getUnreadNotifications = createAction(CLEAR_UNREAD_NOTIFICATIONS)

export const clearUnread = () => getUnreadNotifications()


const INCREMENT_UNREAD_NOTIFICATIONS = 'INCREMENT_UNREAD_NOTIFICATIONS';

export const incrementUnreadNotifications = createAction(INCREMENT_UNREAD_NOTIFICATIONS)

export const incrementUnread = () => incrementUnreadNotifications()

const ADD_NOTIFICATION = 'ADD_NOTIFICATION';

export const addNotificationSuccess = createAction(ADD_NOTIFICATION)

export const addNotification = (notification) => addNotificationSuccess(notification)
