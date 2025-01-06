import React from 'react';
import {connect} from 'react-redux';

import {UpdateRecipe} from '../../components/recipes';
import {viewRecipeRequest, updateRecipeRequest} from '../../actions/recipeActions';

const UpdateRecipeContainer = props => {
    return <UpdateRecipe {...props} />;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    viewRecipeRequest: recipe_uid => {
        return viewRecipeRequest(recipe_uid);
    },
    updateRecipeRequest: (params, recipe_uid) => {
        return updateRecipeRequest(params, recipe_uid);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateRecipeContainer);