import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

import styles from './pages.module.css';
import homeImg from '../../assets/images/home.jpg';

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
        <h1>Home</h1>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={homeImg} className="img-fluid img-thumbnail" />
        </div>
        <div className="col-md-6">
          <p className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
            <span className={styles.highlight}>
              Lorem Ipsum has been the industry's standard
            </span>{' '}
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. 
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
                                <Link to={`/view/${recipe.uid}`} className="btn btn-primary">Read More</Link>
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

export default Home;
