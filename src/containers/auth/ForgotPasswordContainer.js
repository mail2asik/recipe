import React from 'react';
import { connect } from 'react-redux';

import { ForgotPassword } from '../../components/auth';
import { forgotPasswordRequest } from '../../actions/authActions';

const ForgotPasswordContainer = props => {
  return <ForgotPassword forgotPasswordRequest={props.forgotPasswordRequest} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  forgotPasswordRequest: params => {
    return forgotPasswordRequest(params);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordContainer);
