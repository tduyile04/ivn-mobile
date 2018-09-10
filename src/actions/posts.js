import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const GET_POSTS_PENDING = 'GET_POSTS_PENDING';
const GET_POSTS_SUCCESS ='GET_POSTS_SUCCESS';
const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS ='GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

const CREATE_POSTS_PENDING = 'CREATE_POSTS_PENDING';
const CREATE_POSTS_SUCCESS ='CREATE_POSTS_SUCCESS';
const CREATE_POSTS_FAILURE = 'CREATE_POSTS_FAILURE';

const CREATE_COMMENTS_PENDING = 'CREATE_COMMENTS_PENDING';
const CREATE_COMMENTS_SUCCESS ='CREATE_COMMENTS_SUCCESS';
const CREATE_COMMENTS_FAILURE = 'CREATE_COMMENTS_FAILURE';

export const getPostsPending = createAction(GET_POSTS_PENDING)
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS)
export const getPostsFailure = createAction(GET_POSTS_FAILURE)

export const getPostPending = createAction(GET_POST_PENDING)
export const getPostSuccess = createAction(GET_POST_SUCCESS)
export const getPostFailure = createAction(GET_POST_FAILURE)

export const createPostsPending = createAction(CREATE_POSTS_PENDING)
export const createPostsSuccess = createAction(CREATE_POSTS_SUCCESS)
export const createPostsFailure = createAction(CREATE_POSTS_FAILURE)

export const createCommentsPending = createAction(CREATE_COMMENTS_PENDING)
export const createCommentsSuccess = createAction(CREATE_COMMENTS_SUCCESS)
export const createCommentsFailure = createAction(CREATE_COMMENTS_FAILURE)

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

export const getPost = postId => async (dispatch) => {
  dispatch(getPostPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/post/${postId}`);
    dispatch(getPostSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(getPostFailure(errorMessage))
  }
}

export const createPosts = content => async (dispatch) => {
  dispatch(createPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post('/api/v1/posts', { content });
    dispatch(createPostsSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(getPostsFailure(errorMessage))
  }
}

export const createComments = (comment, postId) => async (dispatch) => {
  dispatch(createCommentsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post(`/api/v1/post/${postId}/comment`, { comment });
    dispatch(createCommentsSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    dispatch(createCommentsFailure(errorMessage))
  }
}
