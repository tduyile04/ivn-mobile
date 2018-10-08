import { handleActions } from "redux-actions";
import { 
  createThoughtsCommentsPending,
  createThoughtsCommentsSuccess, 
  createThoughtsCommentsFailure,
  getCandidateThoughtsPending,
  getCandidateThoughtsSuccess,
  getCandidateThoughtsFailure
} from '../actions'

const defaultState = {
  comments: [],
  thoughts: [],
  thoughtsLoading: true,
  commentsLoading: false,
  error: ''
};

export default handleActions({
  [getCandidateThoughtsPending](state = defaultState, { payload }) {
    return {
      ...state,
      thoughtsLoading: true,
      error: payload
    }
  },
  [getCandidateThoughtsSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      thoughts: payload.thoughts,
      comments: payload.thoughts[0] && payload.thoughts[0].comments ? payload.thoughts[0].comments : state.comments,
      thoughtsLoading: false,
      error: ''
    }
  },
  [getCandidateThoughtsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      thoughtsLoading: false,
      error: payload
    }
  },
  [createThoughtsCommentsPending](state = defaultState) {
    return {
      ...state,
      commentsLoading: true,
      error: ''
    }
  },
  [createThoughtsCommentsSuccess](state = defaultState, { payload }) {
    return {
      ...state,
      commentsLoading: false,
      comments: [...state.comments, payload.comment ],
      error: ''
    }
  },
  [createThoughtsCommentsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      commentsLoading: false,
      error: payload 
    }
  },
 }, defaultState);