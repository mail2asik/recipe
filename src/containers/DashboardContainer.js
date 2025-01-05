import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import { listRecipesRequest, deleteRecipesRequest } from '../actions/recipeActions';

const DashboardContainer = props => {
  return <Dashboard {...props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  listRecipesRequest: () => {
    return listRecipesRequest();
  },
  deleteRecipesRequest: recipe_uid => {
    return deleteRecipesRequest(recipe_uid);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
