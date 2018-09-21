import { handleActions } from "redux-actions";
import { 
  getAspirantsPending,
  getAspirantsSuccess, 
  getAspirantsFailure,
  getLgaPending,
  getLgaSuccess,
  getLgaFailure,
  getStatePending,
  getStateSuccess,
  getStateFailure,
  updateSelectedState,
  updateSelectedLocalGovernment
} from '../actions'

const defaultLocations = {
  COUNTRY: "ng",
  STATE: "Lagos",
  LGA: "Ikeja"
}

const defaultState = {
  token: '',
  aspirants: [],
  countryState: [],
  countryLocalGovernment: [],
  countrySelected: defaultLocations.COUNTRY,
  stateSelected: defaultLocations.STATE,
  localGovernmentSelected: defaultLocations.LGA,
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
  },
  [getStatePending](state = defaultState) {
    return {
      ...state,
      error: ''
    }
  },
  [getStateSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      countryState: payload.country,
      error: ''
    }
  },
  [getStateFailure](state = defaultState, { payload }) {
    return {
      ...state,
      error: payload 
    }
  },
  [getLgaPending](state = defaultState) {
    return {
      ...state,
      error: ''
    }
  },
  [getLgaSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      countryLocalGovernment: payload.state,
      error: ''
    }
  },
  [getLgaFailure](state = defaultState, { payload }) {
    return {
      ...state,
      error: payload 
    }
  },
  [updateSelectedState](state = defaultState, { payload }) {
    return {
      ...state,
      stateSelected: payload
    }
  },
  [updateSelectedLocalGovernment](state = defaultState, { payload }) {
    return {
      ...state,
      localGovernmentSelected: payload
    }
  }
}, defaultState);