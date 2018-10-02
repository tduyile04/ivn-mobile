import { handleActions } from "redux-actions";
import {
  getPartiesPending,
  getPartiesSuccess,
  getPartiesFailure,
  getPartyPending,
  getPartySuccess,
  getPartyFailure,
  getPartyFollowFailure,
  getPartyFollowPending,
  getPartyUnFollowSuccess,
  getPartyUnFollowFailure,
  getPartyFollowSuccess,
  unSelectPartySuccess
} from '../actions';

const defaultState = {
  parties: [],
  activeParty: {},
  loading: false,
  partyLoading: false,
  error: '',
  selected: null
};

export default handleActions({
  [getPartiesPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [getPartiesSuccess](state = defaultState, { payload: { parties } }) {
    return {
      ...state,
      parties: [ ...state.parties, ...parties ],
      loading: false,
      error: ''
    }
  },
  [getPartiesFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
  [getPartyPending](state = {}) {
    return {
      ...state,
      partyLoading: true,
      error: ''
    }
  },
  [getPartySuccess](state = defaultState, { payload: { party } }) {
    return {
      ...state,
      selected: party,
      partyLoading: false,
      error: ''
    }
  },
  [getPartyFailure](state = defaultState, { payload }) {
    return {
      ...state,
      partyLoading: false,
      error: payload
    }
  },
  [getPartyFollowFailure](state = defaultState, { payload: { party } }) {
    return {
      ...state,
      selected: party,
      partyLoading: false,
      error: ''
    }
  },
  [getPartyFollowSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      partyLoading: false,
      error: payload
    }
  },
   [getPartyUnFollowSuccess](state = defaultState, { payload: { party } }) {
    return {
      ...state,
      selected: party,
      partyLoading: false,
      error: ''
    }
  },
  [getPartyUnFollowFailure](state = defaultState, { payload }) {
    return {
      ...state,
      partyLoading: false,
      error: payload
    }
  },
  [unSelectPartySuccess](state = defaultState) {
    return {
      ...state,
      selected: null
    }
  },
}, defaultState);
