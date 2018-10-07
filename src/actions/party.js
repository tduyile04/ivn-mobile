import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_PARTIES_PENDING = 'GET_PARTIES_PENDING';
const GET_PARTIES_SUCCESS ='GET_PARTIES_SUCCESS';
const GET_PARTIES_FAILURE = 'GET_PARTIES_FAILURE';

const GET_PARTY_PENDING = 'GET_PARTY_PENDING';
const GET_PARTY_SUCCESS ='GET_PARTY_SUCCESS';
const GET_PARTY_FAILURE = 'GET_PARTY_FAILURE';

const GET_PARTY_FOLLOW_PENDING = 'GET_PARTY_FOLLOW_PENDING';
const GET_PARTY_FOLLOW_SUCCESS ='GET_PARTY_FOLLOW_SUCCESS';
const GET_PARTY_FOLLOW_FAILURE = 'GET_PARTY_FOLLOW_FAILURE';

const GET_PARTY_UNFOLLOW_PENDING = 'GET_PARTY_UNFOLLOW_PENDING';
const GET_PARTY_UNFOLLOW_SUCCESS ='GET_PARTY_UNFOLLOW_SUCCESS';
const GET_PARTY_UNFOLLOW_FAILURE = 'GET_PARTY_UNFOLLOW_FAILURE';


const UNSELECT_PARTY_SUCCESS = 'UNSELECT_PARTY_SUCCESS';

export const getPartyPending = createAction(GET_PARTY_PENDING)
export const getPartySuccess = createAction(GET_PARTY_SUCCESS)
export const getPartyFailure = createAction(GET_PARTY_FAILURE)

export const getPartyFollowPending = createAction(GET_PARTY_FOLLOW_PENDING)
export const getPartyFollowSuccess = createAction(GET_PARTY_FOLLOW_SUCCESS)
export const getPartyFollowFailure = createAction(GET_PARTY_FOLLOW_FAILURE)

export const getPartyUnFollowPending = createAction(GET_PARTY_UNFOLLOW_PENDING)
export const getPartyUnFollowSuccess = createAction(GET_PARTY_UNFOLLOW_SUCCESS)
export const getPartyUnFollowFailure = createAction(GET_PARTY_UNFOLLOW_FAILURE)

export const getPartiesPending = createAction(GET_PARTIES_PENDING)
export const getPartiesSuccess = createAction(GET_PARTIES_SUCCESS)
export const getPartiesFailure = createAction(GET_PARTIES_FAILURE)

export const unSelectPartySuccess = createAction(UNSELECT_PARTY_SUCCESS)

export const getParties = (page = 1, limit = 20) => async (dispatch) => {
  dispatch(getPartiesPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/parties`);
    dispatch(getPartiesSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(getPartiesFailure(errorMessage))
  }
}

export const getParty = (id) => async (dispatch) => {
  dispatch(getPartyPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/party/${id}`);
    dispatch(getPartySuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(getPartyFailure(errorMessage))
  }
}

export const followUserByParty = (id) => async (dispatch) => {
    dispatch(getPartyPending())
    try {
        const token = await get("token");
        const response = await axios(token).post(`/api/v1/party/${id}/follow`);
        dispatch(getPartyFollowSuccess(response.data.data));
    } catch ({ response: { data } }) {
        const errorMessage = data && data.error ? data.error.message : 'Please try again';
        dispatch(getPartyFollowFailure(errorMessage))
    }
}

export const unfollowUserByParty = (id) => async (dispatch) => {
    dispatch(getPartyPending())
    try {
        const token = await get("token");
        const response = await axios(token).post(`/api/v1/party/${id}/unfollow`);
        dispatch(getPartyUnFollowSuccess(response.data.data));
    } catch ({ response: { data } }) {
        const errorMessage = data && data.error ? data.error.message : 'Please try again';
        dispatch(getPartyUnFollowFailure(errorMessage))
    }
}

export const unSelectParty = () => ({ type: UNSELECT_PARTY_SUCCESS })
