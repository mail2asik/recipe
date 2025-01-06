import React from 'react';
import {connect} from 'react-redux';

import {AddRecipe} from '../../components/recipes';
import {storeRecipeRequest, dashboardMessageAction} from '../../actions/recipeActions';

const AddRecipeContainer = props => {
    return <AddRecipe storeRecipeRequest={props.storeRecipeRequest} />;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    storeRecipeRequest: params => {
        return storeRecipeRequest(params).then(res => {
            dispatch(dashboardMessageAction("Recipe has been added Successfully"));
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
)(AddRecipeContainer);