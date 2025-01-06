import { 
    DASHBOARD_MESSAGE
  } from '../constants/actionTypes';

import {
    storeRecipeApi,
    listRecipesApi,
    deleteRecipesApi,
    viewRecipeApi,
    updateRecipeApi,
    listRecentRecipesApi,
    listAllRecipesApi,
    viewPublicRecipeApi
} from '../shared/api';

export const dashboardMessageAction = dashboard_message => dispatch => {
    dispatch({
        type: DASHBOARD_MESSAGE,
        dashboard_message
    });
};


export const storeRecipeRequest = params => {
    return storeRecipeApi(params);
};

export const listRecipesRequest = () => {
    return listRecipesApi();
};

export const deleteRecipesRequest = recipe_uid => {
    return deleteRecipesApi(recipe_uid);
};

export const viewRecipeRequest = recipe_uid => {
    return viewRecipeApi(recipe_uid);
}

export const updateRecipeRequest = (params, recipe_uid) => {
    return updateRecipeApi(params, recipe_uid);
}

export const listRecentRecipesRequest = () => {
    return listRecentRecipesApi();
};

export const listAllRecipesRequest = () => {
    return listAllRecipesApi();
};

export const viewPublicRecipeRequest = recipe_uid => {
    return viewPublicRecipeApi(recipe_uid);
};