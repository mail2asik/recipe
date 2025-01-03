import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';

const DashboardContainer = () => {
  return <Dashboard />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
