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
  createCommentsFailure,
  likePostSuccess,
  likePostPending,
  likePostFailure
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
  limit: 3,
  pendingPost: {
    liked: false,
    id: 23
  }
};

export default handleActions({
  [likePostPending](state=defaultState) {
    return {
      ...state,
      loading: true,
      error: ''
    }
  },
  [likePostSuccess](state=defaultState, { payload: { post } }) {
    const updatedPosts = state.posts.map(gottenPost => {
      if (gottenPost.id === post.id) {
        return {
          ...gottenPost,
          ...post
        };
      }
      return gottenPost;
    });
    return {
      ...state,
      loading: false,
      error: '',
      posts: updatedPosts
    }
  },
  [likePostFailure](state=defaultState, { payload }) {
    return {
      ...state,
      loading: true,
      error: payload
    }
  },
  [getPostsPending](state = {}) {
    return {
      ...state,
      loading: true,
      page: state.page + 1,
      error: ''
    }
  },
  [getPostsSuccess](state = defaultState, { payload: { posts } }) {
    return {
      ...state,
      posts: [ ...state.posts, ...posts ],
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
