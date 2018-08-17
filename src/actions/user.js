import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_USER_PENDING = 'GET_USER_PENDING';
const GET_USER_SUCCESS ='GET_USER_SUCCESS';
const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const getUserPending = createAction(GET_USER_PENDING)
export const getUserSuccess = createAction(GET_USER_SUCCESS)
export const getUserFailure = createAction(GET_USER_FAILURE)

export const getUserDetails = () => async (dispatch) => {
  dispatch(getUserPending());
  try {
    const token = await get("token");
    const response = await axios(token).get('/api/v1/user/e0dd6f34-29f4-4450-ad02-b97cf3aad3c1');
    dispatch(getUserSuccess(response.data.data));
  } catch (error) {
    dispatch(getUserFailure(error.response.data.error));
  }
}
