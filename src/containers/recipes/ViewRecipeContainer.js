import React from 'react';
import {connect} from 'react-redux';

import {ViewRecipe} from '../../components/recipes';
import {viewRecipeRequest, viewPublicRecipeRequest} from '../../actions/recipeActions';

const ViewRecipeContainer = props => {
    return <ViewRecipe {...props} />;
}

const mapStateToProps = state => ({
    user: state.auth.user
});

/*
const mapDispatchToProps = (dispatch, ownProps) => ({
    viewRecipeRequest: recipe_uid => {
        return (ownProps.user) ? viewRecipeRequest(recipe_uid) : viewPublicRecipeRequest(recipe_uid);
    }
});
*/

const mapDispatchToProps = (dispatch) => ({
    viewRecipeRequest: recipe_uid => {
        return viewRecipeRequest(recipe_uid);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewRecipeContainer);