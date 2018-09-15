import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_ASPIRANTS_PENDING = 'GET_ASPIRANTS_PENDING';
const GET_ASPIRANTS_SUCCESS = 'GET_ASPIRANTS_SUCCESS';
const GET_ASPIRANTS_FAILURE = 'GET_ASPIRANTS_FAILURE';

export const getAspirantsPending = createAction(GET_ASPIRANTS_PENDING)
export const getAspirantsSuccess = createAction(GET_ASPIRANTS_SUCCESS)
export const getAspirantsFailure = createAction(GET_ASPIRANTS_FAILURE)

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