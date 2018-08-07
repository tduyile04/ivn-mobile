import { createAction } from 'redux-actions';
import axios from 'axios';

const BASE_URL = 'http://ivotenaija.herokuapp.com/api/v1/';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS ='LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginPending = createAction(LOGIN_PENDING)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailure = createAction(LOGIN_FAILURE)

export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginPending());
  return axios.post(BASE_URL + 'users/login', { email, password })
    .then(result => {
      dispatch(loginSuccess(result))
    }, err => {
      dispatch(loginFailure(err.message))
    })
    .catch(err => {
      dispatch(loginFailure(err))
    })
}

