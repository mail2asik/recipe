import React from 'react';
import { connect } from 'react-redux';

import { PageNotFound } from '../../components/pages';

const PageNotFoundContainer = () => {
  return <PageNotFound />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNotFoundContainer);
