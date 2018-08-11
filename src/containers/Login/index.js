import React from 'react';
import { connect } from 'react-redux';

import Login from '../../components/Login'

import { login } from '../../actions';


const mapStateToProps = state => ({
  token: state.auth.token,
  data: state.auth.data,
  error: state.auth.error,
  loading: state.auth.loading
})

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(login(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);