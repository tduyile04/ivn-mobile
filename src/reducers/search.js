import { handleActions } from "redux-actions";
import {
  searchUserPending,
  searchUserSuccess,
  searchUserFailure,
  searchPartiesPending,
  searchPartiesSuccess,
  searchPartiesFailure
} from '../actions';

const defaultState = {
  users: [],
  parties: [],
  loading: false,
  error: '',
  page: 1,
  limit: 20,
};

export default handleActions({
  [searchUserPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [searchUserSuccess](state = defaultState, { payload: { users } }) {
    return {
      ...state,
      users,
      loading: false,
      error: ''
    }
  },
  [searchUserFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
  [searchPartiesPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [searchPartiesSuccess](state = defaultState, { payload: { parties } }) {
    return {
      ...state,
      parties,
      loading: false,
      error: ''
    }
  },
  [searchPartiesFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
}, defaultState);
