import React from 'react';
import { connect } from 'react-redux';

import FeedList from '../../../shared-components/Feed';

import { getPosts } from '../../../actions';

const Feed = (props) => <FeedList {...props} />

const mapStateToProps = state => ({
  posts: state.post.posts,
  page: state.post.page,
  limit: state.post.limit,
  error: state.post.error,
  loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
  getPosts: (page, limit) => dispatch(getPosts(page, limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);