import { handleActions } from "redux-actions";
import { getUserPending, 
        getUserSuccess, 
        getUserFailure,
        endorseUserPending,
        endorseUserSuccess,
        endorseUserFailure,
        withdrawEndorsementPending,
        withdrawEndorsementSuccess,
        withdrawEndorsementFailure,
        followUserPending,
        followUserSuccess,
        followUserFailure,
        unfollowUserPending,
        unfollowUserSuccess,
        unfollowUserFailure,
        userEditProfilePending,
        userEditProfileSuccess,
        userEditProfileFailure
} from '../actions';

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
  },
  [endorseUserPending](state = defaultState) {
    return {
      ...state,
      loading: true
    }
  },
  [endorseUserSuccess](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      message,
    }
  },
  [endorseUserFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      error: true,
      message
    }
  },
  [withdrawEndorsementPending](state = defaultState) {
    return {
      ...state,
      loading: true
    }
  },
  [withdrawEndorsementSuccess](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      message,
    }
  },
  [withdrawEndorsementFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      error: true,
      message
    }
  },
  [followUserPending](state = defaultState) {
    return {
      ...state,
      loading: true
    }
  },
  [followUserSuccess](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      message,
    }
  },
  [followUserFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      error: true,
      message
    }
  },
  [unfollowUserPending](state = defaultState) {
    return {
      ...state,
      loading: true
    }
  },
  [unfollowUserSuccess](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      message,
    }
  },
  [unfollowUserFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      loading: false,
      error: true,
      message
    }
  },
  [userEditProfilePending](state = defaultState) {
    return {
      ...state,
        userloading: true
    }
  },
  [userEditProfileSuccess](state = defaultState, { payload: { message } }) {
    return {
      ...state,
      userloading: false,
      message,
    }
  },
  [userEditProfileFailure](state = defaultState, { payload: { message } }) {
    return {
      ...state,
        userloading: false,
      error: true,
      message
    }
  },
}, defaultState);
