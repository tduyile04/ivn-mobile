import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_SEARCH_USER_PENDING = 'GET_SEARCH_USER_PENDING';
const GET_SEARCH_USER_SUCCESS ='GET_SEARCH_USER_SUCCESS';
const GET_SEARCH_USER_FAILURE = 'GET_SEARCH_USER_FAILURE';

const GET_SEARCH_PARTY_PENDING = 'GET_SEARCH_PARTY_PENDING';
const GET_SEARCH_PARTY_SUCCESS ='GET_SEARCH_PARTY_SUCCESS';
const GET_SEARCH_PARTY_FAILURE = 'GET_SEARCH_PARTY_FAILURE';

export const searchUserPending = createAction(GET_SEARCH_USER_PENDING)
export const searchUserSuccess = createAction(GET_SEARCH_USER_SUCCESS)
export const searchUserFailure = createAction(GET_SEARCH_USER_FAILURE)

export const searchPartiesPending = createAction(GET_SEARCH_PARTY_PENDING)
export const searchPartiesSuccess = createAction(GET_SEARCH_PARTY_SUCCESS)
export const searchPartiesFailure = createAction(GET_SEARCH_PARTY_FAILURE)


export const searchParty = (q) => async (dispatch) => {
  dispatch(searchPartiesPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/search/party/?q=${q}`);
    dispatch(searchPartiesSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(searchPartiesFailure(errorMessage))
  }
}

export const searchUser = (q) => async (dispatch) => {
  dispatch(searchUserPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/search/user/?q=${q}`);
    dispatch(searchUserSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(searchUserFailure(errorMessage))
  }
}
