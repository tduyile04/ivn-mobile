import { handleActions } from "redux-actions";
import {
  getPostsPending,
  getPostsSuccess,
  getPostsFailure,
  createPostsPending,
  createPostsSuccess,
  createPostsFailure,
  getPostPending,
  getPostSuccess,
  getPostFailure,
  createCommentsPending,
  createCommentsSuccess,
  createCommentsFailure
} from '../actions';

const defaultState = {
  posts: [],
  activePost: {},
  comments: [],
  loading: false,
  commentLoading: false,
  postLoading: false,
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
  [getPostPending](state = {}) {
    return {
      ...state,
      comments: [],
      postLoading: true,
      error: ''
    }
  },
  [getPostSuccess](state = defaultState, { payload: { post } }) {
    return {
      ...state,
      activePost: post,
      comments: [ ...post.comments ],
      postLoading: false,
      error: ''
    }
  },
  [getPostFailure](state = defaultState, { payload }) {
    return {
      ...state,
      postLoading: false,
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
  [createCommentsPending](state = {}) {
    return {
      ...state,
      commentLoading: true,
      error: ''
    }
  },
  [createCommentsSuccess](state = defaultState, { payload: { comment } }) {
    return {
      ...state,
      comments: [...state.comments, comment],
      commentLoading: false,
      error: ''
    }
  },
  [createCommentsFailure](state = defaultState, { payload }) {
    return {
      ...state,
      commentLoading: false,
      error: payload
    }
  }
}, defaultState);