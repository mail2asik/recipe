import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import styles from './pages.module.css';
import homeImg from '../../assets/images/recipes.jpg';

const Home = ({listRecentRecipesRequest}) => {
    const [showError, setShowError] = useState(false);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const loadRecentRecipes = () => {
        listRecentRecipesRequest().then(
        res => {
            setRecipes(res);
            setIsDataLoaded(true);
        },
        err => {
            setShowError(err.message_detail);
        }
        );
    }

    useEffect(() => {
        loadRecentRecipes();
    }, []);
    

  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src={homeImg} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-6">
          <p className="lead">
          Welcome to our Recipe Haven, where culinary dreams come to life! Dive into our treasure trove of delectable recipes, curated for home cooks and food enthusiasts alike. Whether you're a seasoned chef or just starting your culinary journey, you'll find inspiration in our diverse collection of dishes. From quick weekday meals to gourmet delights, we have something to tantalize every palate. Join our community, share your creations, and embark on a delicious adventure with us. Happy cooking! 🍳🥗🍰
          </p>
        </div>
      </div>

        <section className="bg-light py-4 my-5">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h2 className="mb-3 text-primary">Recent Recipes</h2>
                  </div>

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

                    {(isDataLoaded && recipes.length >= 1) && 
                      <div className="row h-100 text-center">
                          <Link to="/recipes">
                            <button type="button" className="btn btn-primary">View All Recipes</button>
                          </Link>
                      </div>
                    }

                  
              </div>
          </div>
        </section>

    </>
  );
};

export default Home;
