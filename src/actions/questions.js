import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const SUBMIT_QUESTIONS_PENDING = 'SUBMIT_QUESTIONS_PENDING';
const SUBMIT_QUESTIONS_SUCCESS ='SUBMIT_QUESTIONS_SUCCESS';
const SUBMIT_QUESTIONS_FAILURE = 'SUBMIT_QUESTIONS_FAILURE';

const GET_QUESTIONS_PENDING = 'GET_QUESTIONS_PENDING';
const GET_QUESTIONS_SUCCESS ='GET_QUESTIONS_SUCCESS';
const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';

export const submitQuestionsPending = createAction(SUBMIT_QUESTIONS_PENDING);
export const submitQuestionsSuccess = createAction(SUBMIT_QUESTIONS_SUCCESS);
export const submitQuestionsFailure = createAction(SUBMIT_QUESTIONS_FAILURE);

export const getQuestionsPending = createAction(GET_QUESTIONS_PENDING);
export const getQuestionsSuccess = createAction(GET_QUESTIONS_SUCCESS);
export const getQuestionsFailure = createAction(GET_QUESTIONS_FAILURE);

export const submitQuestions = (candidate, question) => async (dispatch) => {
  dispatch(submitQuestionsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post(`/api/v1/questions`, { candidate, question });
    return dispatch(submitQuestionsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(submitQuestionsFailure(errorMessage))
  }
}

export const getQuestions = (candidate, page = 1, limit = 20) => async (dispatch) => {
  dispatch(getQuestionsPending())
  try {
    const token = await get("token");
    const response = await axios(token).get(`/api/v1/questions/?limit=${limit}&page=${page}&candidate=${candidate}`);
    return dispatch(getQuestionsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(getQuestionsFailure(errorMessage))
  }
}