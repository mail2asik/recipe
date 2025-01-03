import React from 'react';
import { connect } from 'react-redux';

import { Register } from '../../components/auth';
import { registerRequest } from '../../actions/authActions';

const RegisterContainer = props => {
  return <Register registerRequest={props.registerRequest} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  registerRequest: params => {
    return registerRequest(params);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
