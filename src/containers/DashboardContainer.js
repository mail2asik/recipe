import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../components/dashboard';
import { listRecipesRequest, deleteRecipesRequest, dashboardMessageAction } from '../actions/recipeActions';

const DashboardContainer = props => {
  return <Dashboard {...props} />;
};

const mapStateToProps = state => ({
  dashboard_message: state.recipe.dashboard_message
});

const mapDispatchToProps = dispatch => ({
  listRecipesRequest: () => {
    return listRecipesRequest();
  },
  deleteRecipesRequest: recipe_uid => {
    return deleteRecipesRequest(recipe_uid).then(res => {
        dispatch(dashboardMessageAction("Recipe has been deleted Successfully"));
        //TODO: Work on timeout issue
        setTimeout(() => {
          dispatch(dashboardMessageAction(""));
        }, 5000);
        return res;
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer);
