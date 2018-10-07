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

const LIKE_POST_PENDING = 'LIKE_POST_PENDING';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

const GET_USER_POSTS_PENDING = 'GET_USER_POSTS_PENDING'
const GET_USER_POSTS_SUCCESS = 'GET_USER_POSTS_SUCCESS'
const GET_USER_POSTS_FAILURE = 'GET_USER_POSTS_FAILURE'

//* Should be removed from the posts page
const GET_CandidateOfTheWeek_PENDING = 'GET_CandidateOfTheWeek_PENDING'
const GET_CandidateOfTheWeek_SUCCESS = 'GET_CandidateOfTheWeek_SUCCESS'
const GET_CandidateOfTheWeek_FAILURE = 'GET_CandidateOfTheWeek_FAILURE'

//* Should be removed from the posts page
const GET_CandidateThoughts_PENDING = 'GET_CandidateThoughts_PENDING'
const GET_CandidateThoughts_SUCCESS = 'GET_CandidateThoughts_SUCCESS'
const GET_CandidateThoughts_FAILURE = 'GET_CandidateThoughts_FAILURE'


export const getPostsPending = createAction(GET_POSTS_PENDING);
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS);
export const getPostsFailure = createAction(GET_POSTS_FAILURE);

export const getUserPostsPending = createAction(GET_USER_POSTS_PENDING)
export const getUserPostsSuccess = createAction(GET_USER_POSTS_SUCCESS)
export const getUserPostsFailure = createAction(GET_USER_POSTS_FAILURE)

//* Should be removed from the posts page
export const getCandidateOfTheWeekPending = createAction(GET_CandidateOfTheWeek_PENDING)
export const getCandidateOfTheWeekSuccess = createAction(GET_CandidateOfTheWeek_SUCCESS)
export const getCandidateOfTheWeekFailure = createAction(GET_CandidateOfTheWeek_FAILURE)

//* Should be removed from the posts page
export const getCandidateThoughtsPending = createAction(GET_CandidateThoughts_PENDING)
export const getCandidateThoughtsSuccess = createAction(GET_CandidateThoughts_SUCCESS)
export const getCandidateThoughtsFailure = createAction(GET_CandidateThoughts_FAILURE)

export const getPostPending = createAction(GET_POST_PENDING);
export const getPostSuccess = createAction(GET_POST_SUCCESS);
export const getPostFailure = createAction(GET_POST_FAILURE);

export const createPostsPending = createAction(CREATE_POSTS_PENDING);
export const createPostsSuccess = createAction(CREATE_POSTS_SUCCESS);
export const createPostsFailure = createAction(CREATE_POSTS_FAILURE);

export const createCommentsPending = createAction(CREATE_COMMENTS_PENDING);
export const createCommentsSuccess = createAction(CREATE_COMMENTS_SUCCESS);
export const createCommentsFailure = createAction(CREATE_COMMENTS_FAILURE);

export const likePostPending = createAction(LIKE_POST_PENDING);
export const likePostSuccess = createAction(LIKE_POST_SUCCESS);
export const likePostFailure = createAction(LIKE_POST_FAILURE);

export const getPosts = (page = 1, limit = 20) => async (dispatch) => {
  dispatch(getPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/posts?limit=${limit}&page=${page}`);
    return dispatch(getPostsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getPostsFailure(errorMessage))
  }
}

export const getPost = postId => async (dispatch) => {
  dispatch(getPostPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/post/${postId}`);
    return dispatch(getPostSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getPostFailure(errorMessage))
  }
}

export const createPosts = content => async (dispatch) => {
  dispatch(createPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post('/api/v1/posts', { content });
    return dispatch(createPostsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getPostsFailure(errorMessage))
  }
}

export const createComments = (comment, postId) => async (dispatch) => {
  dispatch(createCommentsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post(`/api/v1/post/${postId}/comment`, { comment });
    return dispatch(createCommentsSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(createCommentsFailure(errorMessage))
  }
}

export const likePost = postId => async dispatch => {
  dispatch(likePostPending());
  try {
    const token = await get("token");
    const response = await axios(token).put(`/api/v1/post/${postId}/like`);
    return dispatch(likePostSuccess(response.data.data));
  } catch ({ response, message }) {
    return dispatch(likePostFailure(message));
  }
}

export const getUserPosts = userId => async dispatch => {
  dispatch(getUserPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/posts/?user=${userId}`);
    return dispatch(getUserPostsSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getUserPostsFailure(errorMessage))
  }
}

export const getCandidateOfTheWeek = userId => async dispatch => {
  dispatch(getUserPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/feature/candidates`,{
        candidate: userId,
        type: 'week'
    });
    return dispatch(getCandidateOfTheWeekSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getCandidateOfTheWeekFailure(errorMessage))
  }
}

export const getCandidateThoughts = userId => async dispatch => {
  dispatch(getUserPostsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/thoughts/?types=week`);
    return dispatch(getCandidateThoughtsSuccess(response.data.data.thoughts))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getCandidateThoughtsFailure(errorMessage))
  }
}
