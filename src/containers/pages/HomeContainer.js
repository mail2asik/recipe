import React from 'react';
import { connect } from 'react-redux';

import { Home } from '../../components/pages';

const HomeContainer = () => {
  return <Home />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
