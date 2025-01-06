import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import recipesImg from '../../assets/images/recipes.jpg';

const Recipes = ({listAllRecipesRequest}) => {
    const [showError, setShowError] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const loadAllRecipes = () => {
        listAllRecipesRequest().then(
        res => {
            setRecipes(res.data);
            setIsDataLoaded(true);
        },
        err => {
            setShowError(err.message_detail);
        }
        );
    }

    useEffect(() => {
        loadAllRecipes();
    }, []);

  return (
    <>
      <h1>Recipes</h1>
      <section className="bg-light py-4">
          <div className="container">
              <div className="row">

                {!isDataLoaded && (
                    <div className="row h-100 justify-content-center align-items-center">
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                )}

                {(isDataLoaded && recipes.length === 0) && 
                    <div className="row h-100 justify-content-center align-items-center">
                        No recipes found
                    </div>
                }

                {(isDataLoaded && showError) && 
                    <div className="row h-100 justify-content-center align-items-center">
                        {showError} 
                    </div>
                }

                {recipes.map((recipe, i) => 

                  <div className="col-md-6 col-lg-3" key={i}>
                      <div className="card my-3">

                          <img src={recipe.image_url.thumb} className="card-image-top" alt="thumbnail" />

                          <div className="card-body">
                              <h3 className="card-title">
                                <Link to={`/view/${recipe.uid}`} className="text-secondary">
                                    {recipe.title}
                                </Link>
                              </h3>
                              <p className="card-text">{recipe.short_desc}</p>
                              <Link to={`/view/${recipe.uid}`} className="btn btn-secondary">Read More</Link>
                          </div>
                      </div>
                  </div>
                )}
                  
              </div>
          </div>
        </section>
    </>
  );
};

export default Recipes;
