import React from 'react';
import { connect } from 'react-redux';

import SignUp from '../../components/SignUp'

import { signup } from '../../actions';


const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
  error: state.auth.error,
  loading: state.auth.loading
})

const mapDispatchToProps = dispatch => ({
  signup: data => dispatch(signup(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);