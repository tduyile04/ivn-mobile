import { createAction } from 'redux-actions';
import axios from '../modules/axios';
import { get } from '../modules/cache';

const SUBMIT_QUESTIONS_PENDING = 'SUBMIT_QUESTIONS_PENDING';
const SUBMIT_QUESTIONS_SUCCESS ='SUBMIT_QUESTIONS_SUCCESS';
const SUBMIT_QUESTIONS_FAILURE = 'SUBMIT_QUESTIONS_FAILURE';

export const submitQuestionsPending = createAction(SUBMIT_QUESTIONS_PENDING);
export const submitQuestionsSuccess = createAction(SUBMIT_QUESTIONS_SUCCESS);
export const submitQuestionsFailure = createAction(SUBMIT_QUESTIONS_FAILURE);


export const submitQuestions = (page = 1, limit = 20) => async (dispatch) => {
  dispatch(submitQuestionsPending())
  try {
    const token = await get("token");
    const response = await axios(token).post(`/api/v1/questions`);
    return dispatch(submitQuestionsSuccess(response.data.data));
  } catch ({ response: { data } }) {
    console.log("the data -> ", data)
    const errorMessage = data && data.error ? data.error.message : 'Please try again';
    return dispatch(submitQuestionsFailure(errorMessage))
  }
}