import { handleActions } from "redux-actions";
import {
  submitQuestionsPending,
  submitQuestionsSuccess,
  submitQuestionsFailure,
  getQuestionsPending,
  getQuestionsSuccess,
  getQuestionsFailure
} from '../actions';

const defaultState = {
  questions: [],
  loading: false,
  success: false,
  error: ''
};

export default handleActions({
  [submitQuestionsPending](state = defaultState) {
    return {
      ...state,
      loading: true,
      success: false,
      error: ''
    }
  },
  [submitQuestionsSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      success: true,
      error: ''
    }
  },
  [submitQuestionsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      success: false,
      error: payload
    }
  },
  [getQuestionsPending](state = defaultState) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [getQuestionsSuccess](state = defaultState, { payload: { questions } }) {
    return {
      ...state,
      loading: false,
      questions,
      error: ''
    }
  },
  [getQuestionsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      success: false,
      error: payload
    }
  },
}, defaultState);