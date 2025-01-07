import config from './config';

export const registerApi = params => {
  return config({
    url: `/auth/register`,
    method: 'POST',
    data: params
  });
};

export const activateApi = params => {
  return config({
    url: `/auth/activate-by-url/${params.email}/${params.token}`,
    method: 'POST'
  });
};

export const loginApi = params => {
  return config({
    url: `/auth/login`,
    method: 'POST',
    data: params
  });
};

export const logoutApi = () => {
  return config({
    url: `/auth/logout`,
    method: 'POST'
  });
};

export const forgotPasswordApi = params => {
  return config({
    url: `/auth/password-reminder`,
    method: 'POST',
    data: params
  });
};

export const resetPasswordApi = params => {
  return config({
    url: `/auth/password-reset`,
    method: 'POST',
    data: params
  });
};

export const storeRecipeApi = params => {
  var bodyFormData = new FormData();
  bodyFormData.append('category', params.category);
  bodyFormData.append('title', params.title);
  bodyFormData.append('image', params.image);
  bodyFormData.append('ingredients', params.ingredients);
  bodyFormData.append('short_desc', params.short_desc);
  bodyFormData.append('long_desc', params.long_desc);
 
  return config({
    url: `/recipe`,
    method: 'POST',
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" }
  });
};

export const listRecipesApi = () => {
  return config({
    url: `/recipe`,
    method: 'GET'
  });
};

export const deleteRecipesApi = recipe_uid => {
  return config({
    url: `/recipe/${recipe_uid}`,
    method: 'DELETE'
  });
};

export const viewRecipeApi = recipe_uid => {
  return config({
    url: `/recipe/${recipe_uid}`,
    method: 'GET'
  });
};

export const updateRecipeApi = (params, recipe_uid) => {
  return config({
    url: `/recipe/${recipe_uid}`,
    method: 'PUT',
    data: params
  });
};

export const listRecentRecipesApi = () => {
  return config({
    url: `/recipe/recent`,
    method: 'GET'
  });
};

export const listAllRecipesApi = (searchKeywords) => {
  return config({
    url: `/recipe/all?search_by_keywords=` + searchKeywords,
    method: 'GET'
  });
};

export const viewPublicRecipeApi = recipe_uid => {
  return config({
    url: `/recipe/view/${recipe_uid}`,
    method: 'GET'
  });
};