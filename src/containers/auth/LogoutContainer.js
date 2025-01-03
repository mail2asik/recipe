import React from 'react';
import { connect } from 'react-redux';

import { Logout } from '../../components/auth';
import { logoutAction, logoutRequest } from '../../actions/authActions';

const LogoutContainer = props => {
  return <Logout logoutRequest={props.logoutRequest} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  logoutRequest: () => {
    return logoutRequest().finally(() => {
      dispatch(logoutAction());
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutContainer);
