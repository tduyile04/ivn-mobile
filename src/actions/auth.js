import { createAction } from 'redux-actions';
import axios from 'axios';

const BASE_URL = 'http://ivotenaija.herokuapp.com/api/v1/';

const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS ='LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const SIGNUP_PENDING = 'SIGNUP_PENDING';
const SIGNUP_SUCCESS ='SIGNUP_SUCCESS';
const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const loginPending = createAction(LOGIN_PENDING)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginFailure = createAction(LOGIN_FAILURE)

export const signupPending = createAction(SIGNUP_PENDING);
export const signupSuccess = createAction(SIGNUP_SUCCESS);
export const signupFailure = createAction(SIGNUP_FAILURE);

export const login = ({ email, password }) => (dispatch) => {
  dispatch(loginPending());
  return axios.post(BASE_URL + 'users/login', { email, password })
    .then(result => {
      dispatch(loginSuccess(result))
    })
    .catch(({ response: { data } }) => {
      const errorMessage = data && data.error ? data.error.message : 'Please try again';
      dispatch(loginFailure(errorMessage))
    })
}

export const signup = fields => dispatch => {
  dispatch(signupPending());
  return axios.post(BASE_URL + 'users/', fields)
    .then(result => {
      dispatch(signupSuccess(result))
    })
    .catch(({ response : { data } }) => {
      const errorMessage = data && data.error ? data.error.message : 'Please try again';
      dispatch(signupFailure(errorMessage))
    })
}

