import { handleActions } from "redux-actions";
import {
  getPostsPending,
  getPostsSuccess,
  getPostsFailure,
  createPostsPending,
  createPostsSuccess,
  createPostsFailure
} from '../actions';

const defaultState = {
  posts: [],
  loading: false,
  error: '',
  page: 1,
  limit: 3
};

export default handleActions({
  [getPostsPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [getPostsSuccess](state = defaultState, { payload: { posts } }) {
    return {
      ...state,
      posts: [ ...state.posts, ...posts ],
      page: state.page + 1,
      loading: false,
      error: ''
    }
  },
  [getPostsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
  [createPostsPending](state = {}) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [createPostsSuccess](state = defaultState, { payload: { post } }) {
    return {
      ...state,
      posts: [ ...state.posts, post ],
      loading: false,
      error: ''
    }
  },
  [createPostsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      loading: false,
      error: payload
    }
  },
}, defaultState);