import React from 'react';
import { connect } from 'react-redux';

import { Recipes } from '../../components/pages';

const RecipesContainer = () => {
  return <Recipes />;
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = props => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesContainer);
