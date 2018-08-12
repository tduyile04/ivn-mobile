import { handleActions } from "redux-actions";
import { loginPending, loginSuccess, loginFailure } from '../actions'

const defaultState = {
  token: '',
  user: {},
  loading: false,
  error: ''
};

export default handleActions({
  [loginPending](state = defaultState) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [loginSuccess](state = defaultState, { payload: { data } }) {
    return {
      ...state,
      loading: false,
      user: data.data.user,
      token: data.data.user.token,
      error: ''
    }
  },
  [loginFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload 
    }
  }
}, defaultState);