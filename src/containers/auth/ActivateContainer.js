import React from 'react';
import { connect } from 'react-redux';

import { Activate } from '../../components/auth';
import { activateRequest } from '../../actions/authActions';

const ActivateContainer = props => {
  return <Activate {...props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  activateRequest: params => {
    return activateRequest(params);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivateContainer);
