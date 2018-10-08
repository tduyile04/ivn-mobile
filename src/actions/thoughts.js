import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const CREATE_THOUGHTS_COMMENTS_PENDING = 'CREATE_THOUGHTS_COMMENTS_PENDING';
const CREATE_THOUGHTS_COMMENTS_SUCCESS ='CREATE_THOUGHTS_COMMENTS_SUCCESS';
const CREATE_THOUGHTS_COMMENTS_FAILURE = 'CREATE_THOUGHTS_COMMENTS_FAILURE';

const GET_CANDIDATE_THOUGHTS_PENDING = 'GET_CANDIDATE_THOUGHTS_PENDING'
const GET_CANDIDATE_THOUGHTS_SUCCESS = 'GET_CANDIDATE_THOUGHTS_SUCCESS'
const GET_CANDIDATE_THOUGHTS_FAILURE = 'GET_CANDIDATE_THOUGHTS_FAILURE'

export const createThoughtsCommentsPending = createAction(CREATE_THOUGHTS_COMMENTS_PENDING)
export const createThoughtsCommentsSuccess = createAction(CREATE_THOUGHTS_COMMENTS_SUCCESS)
export const createThoughtsCommentsFailure = createAction(CREATE_THOUGHTS_COMMENTS_FAILURE)

export const getCandidateThoughtsPending = createAction(GET_CANDIDATE_THOUGHTS_PENDING)
export const getCandidateThoughtsSuccess = createAction(GET_CANDIDATE_THOUGHTS_SUCCESS)
export const getCandidateThoughtsFailure = createAction(GET_CANDIDATE_THOUGHTS_FAILURE)

export const getCandidateThoughts = () => async dispatch => {
  dispatch(getCandidateThoughtsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/thoughts/?types=week`);
    return dispatch(getCandidateThoughtsSuccess(response.data.data))
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getCandidateThoughtsFailure(errorMessage))
  }
}

export const createThoughtsComments = (comment, thought_id) => async (dispatch) => {
  dispatch(createThoughtsCommentsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post(`/api/v1/thoughts/${thought_id}/comment`, { comment });
    return dispatch(createThoughtsCommentsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(createThoughtsCommentsFailure(errorMessage))
  }
}