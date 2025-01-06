import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {ViewRecipe} from '../../components/recipes';
import {viewPublicRecipeRequest} from '../../actions/recipeActions';

const ViewPublicRecipeContainer = props => {
    return <ViewRecipe {...props} />;
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    viewRecipeRequest: recipe_uid => {
        return viewPublicRecipeRequest(recipe_uid);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ViewPublicRecipeContainer);