import React from 'react';
import { connect } from 'react-redux';

import { ResetPassword } from '../../components/auth';
import { resetPasswordRequest } from '../../actions/authActions';

const ResetPasswordContainer = props => {
  return (
    <ResetPassword resetPasswordRequest={props.resetPasswordRequest} />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  resetPasswordRequest: (params, email, token) => {
    params.email = email;
    params.token = token;

    return resetPasswordRequest(params);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPasswordContainer);
