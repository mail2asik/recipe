import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom"
import { Alert, Spinner } from 'react-bootstrap';

const ViewRecipe = ({viewRecipeRequest, user}) => {
    const { recipe_uid } = useParams();
    const [showError, setShowError] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [recipe, setRecipe] = useState({});

    const loadRecipe = recipe_uid => {
        viewRecipeRequest(recipe_uid).then(
            res => {
                setRecipe(res);
                setIsDataLoaded(true);
            },
            err => {
                setShowError(err.message_detail);
            }
        );
    }

    useEffect(() => {
        loadRecipe(recipe_uid);
    }, []);

    return (
        <>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <div className="row">
                <div className="col-sm-6">
                <h6 className="m-0 font-weight-bold text-primary">View Recipe</h6>
                </div>
                <div className="col-sm-6 text-end">
                {user &&    
                <Link to="/dashboard">
                    <button type="button" className="btn btn-primary">View All My Recipes</button>
                </Link>
                }          
                </div> 
            </div>
          </div>
          <div className="card-body">
                {!isDataLoaded && (
                    <div className="row h-100 justify-content-center align-items-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
                )}

                <div className="row h-100 justify-content-center align-items-center">
                {(isDataLoaded && showError) && (
                            <Alert
                            variant="danger"
                            onClose={() => setShowError(false)}
                            dismissible
                            >
                            {showError}
                            </Alert>
                        )}
                {(isDataLoaded && !showError && Object.keys(recipe).length) && (
                        <>
                        <div className="mb-3 required">
                            <label className="form-label">Category</label>
                            <label className="form-control">{recipe.category == 'veg' ? 'Vegetarian' : 'Non Vegetarian'}</label>
                        </div>
                        <div className="mb-3 required">
                            <label className="form-label">Title</label>
                            <label className="form-control">{recipe.title}</label>
                        </div>
                        <div className="mb-3 required">
                            <label className="form-label">Photo</label>
                            <label className="form-control">
                                <img src={recipe.image_url.thumb} />
                            </label>
                        </div>
                        <div className="mb-3 required">
                            <label className="form-label">Ingredients</label>
                            <label className="form-control">{recipe.ingredients}</label>
                        </div>
                        <div className="mb-3 required">
                            <label className="form-label">Short Description</label>
                            <label className="form-control">{recipe.short_desc}</label>
                        </div>
                        <div className="mb-3 required">
                            <label className="form-label">Long Description</label>
                            <label className="form-control">{recipe.long_desc}</label>
                        </div>
                        </>
                    )}
                </div>


          </div>
        </div>
        </>
    )
}

export default ViewRecipe;