# Recipe Web Application Using React and its Libraries (Front End)

This project details the front-end architecture for the Recipe Web Application, which is developed using React and its libraries (Single Page Application). The front end provides an interactive and responsive user experience, enabling seamless browsing, viewing, and managing of recipes.

You can refer the API for this project [here](https://github.com/mail2asik/api-recipe).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Technical Implementation
- **Redux** : Utilized Redux for state management.
- **Router** : Employed for managing application routes.
- **Axios** : Used for communicating with APIs.
- **Formik** : Simplified validation and state management.
- **Env** : Managed environment variables for different environments.
- **Husky** : Implemented Git hooks for linting and formatting the codebase using Prettier.

## Functionalities

This application includes essential features for managing user-generated recipes:
- Public users can view recipes posted by registered users.
- Any user can register for an account.
- Users must activate their accounts by verifying their email addresses.
- Users can log in to the application.
- Users can reset their passwords if forgotten.
- Users can post recipes with details such as Category, Title, Image, Ingredients, Short Description, and Long Description.
- User can edit and delete recipes
- Admins will review and approve recipes.
- Users will receive an email once their recipe is approved by an Admin.
- The recipe status will change from "PENDING" to "APPROVED".
- Approved recipes will be available to the public.
- Admins can reject recipes if they are invalid or spam.

**Note** : Admin interface is part of the [API](https://github.com/mail2asik/api-recipe) project and is not a single-page application. It does not consume API endpoints.

## The following API's are used

**Authentication**

POST      api.recipe.local/api/auth/register 

POST      api.recipe.local/api/auth/login 

POST      api.recipe.local/api/auth/activate-by-url/{email}/{token} 

POST      api.recipe.local/api/auth/logout 

POST      api.recipe.local/api/auth/password-change

POST      api.recipe.local/api/auth/password-reminder 

POST      api.recipe.local/api/auth/password-reset

**Recipes**

POST      api.recipe.local/api/recipe 

GET|HEAD  api.recipe.local/api/recipe 

GET|HEAD  api.recipe.local/api/recipe/all 

GET|HEAD  api.recipe.local/api/recipe/recent 

GET|HEAD  api.recipe.local/api/recipe/view/{recipe_uid} 

GET|HEAD  api.recipe.local/api/recipe/{recipe_uid}

PUT       api.recipe.local/api/recipe/{recipe_uid} 

DELETE    api.recipe.local/api/recipe/{recipe_uid}

## TODO
- Improve recipe image validation to display an appropriate message if the uploaded image contains different MIME types.
- Write test cases using Pest.