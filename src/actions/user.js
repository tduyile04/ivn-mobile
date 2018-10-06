import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_USER_PENDING = 'GET_USER_PENDING';
const GET_USER_SUCCESS ='GET_USER_SUCCESS';
const GET_USER_FAILURE = 'GET_USER_FAILURE';
const ENDORSE_USER_PENDING = 'ENDORSE_USER_PENDING';
const ENDORSE_USER_SUCCESS ='ENDORSE_USER_SUCCESS';
const ENDORSE_USER_FAILURE = 'ENDORSE_USER_FAILURE';
const WITHDRAW_ENDORSEMENT_PENDING = 'WITHDRAW_ENDORSEMENT_PENDING';
const WITHDRAW_ENDORSEMENT_SUCCESS ='WITHDRAW_ENDORSEMENT_SUCCESS';
const WITHDRAW_ENDORSEMENT_FAILURE = 'WITHDRAW_ENDORSEMENT_FAILURE';
const FOLLOW_USER_PENDING = 'FOLLOW_USER_PENDING';
const FOLLOW_USER_SUCCESS ='FOLLOW_USER_SUCCESS';
const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
const UNFOLLOW_USER_PENDING = 'UNFOLLOW_USER_PENDING';
const UNFOLLOW_USER_SUCCESS ='UNFOLLOW_USER_SUCCESS';
const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
const EDIT_USER_PENDING = 'EDIT_USER_PENDING';
const EDIT_USER_SUCCESS ='EDIT_USER_SUCCESS';
const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';

export const getUserPending = createAction(GET_USER_PENDING)
export const getUserSuccess = createAction(GET_USER_SUCCESS)
export const getUserFailure = createAction(GET_USER_FAILURE)
export const endorseUserPending = createAction(ENDORSE_USER_PENDING)
export const endorseUserSuccess = createAction(ENDORSE_USER_SUCCESS)
export const endorseUserFailure = createAction(ENDORSE_USER_FAILURE)
export const withdrawEndorsementPending = createAction(WITHDRAW_ENDORSEMENT_PENDING)
export const withdrawEndorsementSuccess = createAction(WITHDRAW_ENDORSEMENT_SUCCESS)
export const withdrawEndorsementFailure = createAction(WITHDRAW_ENDORSEMENT_FAILURE)
export const followUserPending = createAction(FOLLOW_USER_PENDING)
export const followUserSuccess = createAction(FOLLOW_USER_SUCCESS)
export const followUserFailure = createAction(FOLLOW_USER_FAILURE)
export const unfollowUserPending = createAction(UNFOLLOW_USER_PENDING)
export const unfollowUserSuccess = createAction(UNFOLLOW_USER_SUCCESS)
export const unfollowUserFailure = createAction(UNFOLLOW_USER_FAILURE)

export const userEditProfilePending = createAction(EDIT_USER_PENDING)
export const userEditProfileSuccess = createAction(EDIT_USER_SUCCESS)
export const userEditProfileFailure = createAction(EDIT_USER_FAILURE)


export const getUserDetails = userId => async (dispatch) => {
  dispatch(getUserPending());
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/user/${userId}`);
    dispatch(getUserSuccess(response.data.data));
  } catch (error) {
    dispatch(getUserFailure(error.response.data.error));
  }
}

export const endorseUser = userId => async (dispatch) => {
  dispatch(endorseUserPending());
  try {
    const token = await get("token");
    const response = await axios(token).put(`/api/v1/user/${userId}/endorse`);
    dispatch(endorseUserSuccess(response.data.data));
  } catch (error) {
    dispatch(endorseUserFailure(error.response.data.error));
  }
}

export const withdrawEndorsement = userId => async (dispatch) => {
  dispatch(withdrawEndorsementPending());
  try {
    const token = await get("token");
    const response = await axios(token).delete(`/api/v1/user/${userId}/unendorse`);
    dispatch(withdrawEndorsementSuccess(response.data.data));
  } catch (error) {
    dispatch(withdrawEndorsementFailure(error.response.data.error));
  }
}

export const followUser = userId => async (dispatch) => {
  dispatch(followUserPending());
  try {
    const token = await get("token");
    const response = await axios(token).put(`/api/v1/user/${userId}/follow`);
    dispatch(followUserSuccess(response.data.data));
  } catch (error) {
    dispatch(followUserFailure(error.response.data.error));
  }
}

export const unfollowUser = userId => async (dispatch) => {
  dispatch(unfollowUserPending());
  try {
    const token = await get("token");
    const response = await axios(token).delete(`/api/v1/user/${userId}/unfollow`);
    dispatch(unfollowUserSuccess(response.data.data));
  } catch (error) {
    dispatch(unfollowUserFailure(error.response.data.error));
  }
}

export const userEditProfile = (data,userId) => async (dispatch) => {
  // dispatch(userEditProfilePending());
  try {
    const token = await get("token");

    const response = await axios(token).put(`/api/v1/user/${userId}`,data);
    console.log(response.data.data)
    dispatch(userEditProfileSuccess(response.data.data));
  } catch (error) {
      console.log(error.response.data.error)
    dispatch(userEditProfileFailure(error.response.data.error));
  }
}
