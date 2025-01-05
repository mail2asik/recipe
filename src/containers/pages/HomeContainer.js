import React from 'react';
import { connect } from 'react-redux';

import { Home } from '../../components/pages';
import { listRecentRecipesRequest } from '../../actions/recipeActions';

const HomeContainer = props => {
  return <Home {...props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = props => ({
  listRecentRecipesRequest : () => {
    return listRecentRecipesRequest();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
