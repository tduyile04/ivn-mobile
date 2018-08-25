import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
const GET_POSTS_SUCCESS ='GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPostsPending = createAction(GET_POSTS_PENDING)
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS)
export const getPostsFailure = createAction(GET_POSTS_FAILURE)

export const getPosts = (page = 1, limit = 20) => async (dispatch) => {
  dispatch(getPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/posts?limit=${limit}&page=${page}`);
    dispatch(getPostsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(getPostsFailure(errorMessage))
  }
}

