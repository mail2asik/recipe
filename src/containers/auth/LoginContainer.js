import React from 'react';
import { connect } from 'react-redux';

import { Login } from '../../components/auth';
import { loginAction, loginRequest } from '../../actions/authActions';

const LoginContainer = props => {
  return <Login loginRequest={props.loginRequest} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginRequest: params => {
    return loginRequest(params).then(res => {
      dispatch(loginAction(res.user, res.token));
      return res;
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
