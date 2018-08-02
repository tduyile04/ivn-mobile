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
      loading: true
    }
  },
  [loginSuccess](state = defaultState, { payload: { data } }) {
    return {
      ...state,
      loading: false,
      user: data.user
    }
  },
  [loginFailure](state = defaultState, { payload: { error } }) {
    return {
      ...state,
      loading: false,
      error
    }
  }
}, defaultState);