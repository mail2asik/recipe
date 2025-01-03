import React from 'react';
import { connect } from 'react-redux';

import { About } from '../../components/pages';

const AboutContainer = () => {
  return <About />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);
