import React from 'react';
import { connect } from 'react-redux';

import { Contact } from '../../components/pages';

const ContactContainer = () => {
  return <Contact />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactContainer);
