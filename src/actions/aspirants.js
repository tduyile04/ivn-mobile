import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

//* Synchronous action types
const UPDATE_SELECTED_STATE = 'UPDATE_SELECTED_STATE'
const UPDATE_SELECTED_LGA = 'UPDATE_SELECTED_LGA'


const GET_ASPIRANTS_PENDING = 'GET_ASPIRANTS_PENDING';
const GET_ASPIRANTS_SUCCESS = 'GET_ASPIRANTS_SUCCESS';
const GET_ASPIRANTS_FAILURE = 'GET_ASPIRANTS_FAILURE';

const GET_STATE_PENDING = 'GET_STATE_PENDING';
const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
const GET_STATE_FAILURE = 'GET_STATE_FAILURE';

const GET_LGA_PENDING = 'GET_LGA_PENDING';
const GET_LGA_SUCCESS = 'GET_LGA_SUCCESS';
const GET_LGA_FAILURE = 'GET_LGA_FAILURE';


//* Synchronous action creator
export const updateSelectedState = createAction(UPDATE_SELECTED_STATE)
export const updateSelectedLocalGovernment = createAction(UPDATE_SELECTED_LGA)

export const getAspirantsPending = createAction(GET_ASPIRANTS_PENDING)
export const getAspirantsSuccess = createAction(GET_ASPIRANTS_SUCCESS)
export const getAspirantsFailure = createAction(GET_ASPIRANTS_FAILURE)

export const getStatePending = createAction(GET_STATE_PENDING)
export const getStateSuccess = createAction(GET_STATE_SUCCESS)
export const getStateFailure = createAction(GET_STATE_FAILURE)

export const getLgaPending = createAction(GET_LGA_PENDING)
export const getLgaSuccess = createAction(GET_LGA_SUCCESS)
export const getLgaFailure = createAction(GET_LGA_FAILURE)

const selectRightEndpoint = (country, state, localgovernment, roles, page, limit) => {
  let url;
  if (country && state && localgovernment) {
    url = `/api/v1/users/?roles=${roles}&state=${state}&localgovernment=${localgovernment}&country=${country}&limit=${limit}&page=${page}&demo=true`
  }
  if (country && state && !localgovernment) {
    url = `/api/v1/users/?roles=${roles}&state=${state}&country=${country}&limit=${limit}&page=${page}&demo=true`
  }
  if (country && !state && !localgovernment) {
    url = `/api/v1/users/?roles=${roles}&country=${country}&limit=${limit}&page=${page}&demo=true`
  }
  return url
}

export const getAspirants = (country = "nigeria", state="", localgovernment="", roles="candidate,politician", page = 1, limit = 20) => async (dispatch) => {
  const url = selectRightEndpoint(country, state, localgovernment, roles, page, limit);
  dispatch(getAspirantsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(url);
    return dispatch(getAspirantsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getAspirantsFailure(errorMessage))
  }
}

export const getState = country => async (dispatch) => {
  dispatch(getStatePending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`api/v1/location/${country}`)
    return dispatch(getStateSuccess(response.data.data));
  } catch (response) {
    // const errorMessage = data && data.error ? data.error.message : 'Please try again';
    // return dispatch(getStateFailure(errorMessage))
  }
}

/**
 * Gets the list of the local govt based on the country and state selected
 * @param {string} country the name of the selected country
 * @param {string} state the name of the selected state
 */
export const getLocalGovernmentFromSelectedState = (country, state) => async (dispatch) => {
  dispatch(getLgaPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`api/v1/location/${country}/${state}`)
    return dispatch(getLgaSuccess(response.data.data));
  } catch (response) {
    // const errorMessage = data && data.error ? data.error.message : 'Please try again';
    // return dispatch(getLgaFailure(errorMessage))
  }
}

