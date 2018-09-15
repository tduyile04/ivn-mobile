import { handleActions } from "redux-actions";
import { 
  getAspirantsPending,
  getAspirantsSuccess, 
  getAspirantsFailure
} from '../actions'

const defaultState = {
  token: '',
  aspirants: [],
  loading: false,
  error: ''
};

export default handleActions({
  [getAspirantsPending](state = defaultState) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [getAspirantsSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      aspirants: payload.users,
      error: ''
    }
  },
  [getAspirantsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload 
    }
  }
}, defaultState);