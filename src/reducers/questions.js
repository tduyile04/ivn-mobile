import { handleActions } from "redux-actions";
import {
  submitQuestionsPending,
  submitQuestionsSuccess,
  submitQuestionsFailure
} from '../actions';

const defaultState = {
  questions: [],
  loading: false,
  success: false,
  error: ''
};

export default handleActions({
  [submitQuestionsPending](state = {}) {
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
}, defaultState);