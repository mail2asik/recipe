import React from 'react';
import {connect} from 'react-redux';

import {AddRecipe} from '../../components/recipes';
import {storeRecipeRequest} from '../../actions/recipeActions';

const AddRecipeContainer = props => {
    return <AddRecipe storeRecipeRequest={props.storeRecipeRequest} />;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    storeRecipeRequest: params => {
        return storeRecipeRequest(params);
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddRecipeContainer);