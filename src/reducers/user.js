import { handleActions } from "redux-actions";
import { getUserPending, getUserSuccess, getUserFailure } from '../actions';

const defaultState = {
  user: {},
  loading: false,
  error: false,
  message: ''
};

export default handleActions({
  [getUserPending](state = defaultState) {
    return {
      ...state,
      loading: true
    }
  },
  [getUserSuccess](state = defaultState, { payload: { user } }) {
    return {
      ...state,
      loading: false,
      user
    }
  },
  [getUserFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      error: true,
      message
    }
  }
}, defaultState);
