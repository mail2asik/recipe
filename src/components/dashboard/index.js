import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Alert, Spinner } from 'react-bootstrap';

const Dashboard = ({listRecipesRequest, deleteRecipesRequest, dashboard_message}) => {
  const [showError, setShowError] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const loadRecipes = () => {
    listRecipesRequest().then(
      res => {
        setRecipes(res.data);
        setIsDataLoaded(true);
      },
      err => {
        setShowError(err.message_detail);
      }
    );
  }

  const deleteRecipe = recipe_uid => {
    setIsDataLoaded(false);
    deleteRecipesRequest(recipe_uid).then(
      res => {
        loadRecipes();
      },
      err => {
        setShowError(err.message_detail);
      }
    );
  }

  useEffect(() => {
    loadRecipes();
  }, []);

  return (
    <>
        <h1> Dashboard </h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
              <div className="row">
                <div className="col-sm-6">
                  <h6 className="m-0 font-weight-bold text-primary">My Recipes</h6>
                </div>
                <div className="col-sm-6 text-end">
                  <Link to="/add-recipe">
                    <button type="button" className="btn btn-primary">Add Recipe</button>
                  </Link>
                </div>
              </div>
          </div>
          <div className="card-body">
                {(dashboard_message && dashboard_message != '') && 
                  <Alert variant="success">{dashboard_message}</Alert>
                }

                {!isDataLoaded && (
                  <div className="row h-100 justify-content-center align-items-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </div>
                )}

                

              <div className="table-responsive" style={{position: 'static', zoom: 1}}>
                {/*
                <div className="row form-inline mb-2">
                    <div className="col-sm-3">
                      Show
                      <select className="form-select" style={{width: 'auto', display: 'inline'}}>
                          <option value="5">5</option>
                          <option value="10" selected="">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                      </select>
                      entries
                    </div>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-3">
                      <div className="input-group">
                          <input type="text" id="search_by_keywords" className="form-control" placeholder="Search by keywords" value="" />
                          <div className="input-group-append">
                            <button className="btn btn-secondary" id="search_btn" type="button">
                              <i className="fa fa-search fa-sm"></i>
                            </button>
                          </div>
                      </div>
                    </div>
                </div>
                */}
                <div id="ajaxResponse" className="overflowAutoSmallScreen">
                    <div className="row">
                      <div className="col-sm-12">
                          <table className="table table-bordered table-striped dataTable" role="grid">
                            <thead>
                                <tr role="row">
                                  <th>Title</th>
                                  <th className="text-center">Status</th>
                                  <th className="text-center">Updated At</th>
                                  <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                              {(isDataLoaded && recipes.length === 0) && 
                                <tr>
                                  <td colSpan="4" align="center"> No recipes found </td>
                                </tr>
                              }

                              {(isDataLoaded && showError) && 
                                <tr>
                                  <td colSpan="4" align="center"> {showError} </td>
                                </tr>
                              }
                              
                              {recipes.map((recipe, i) => 
                                  <tr key={i}>
                                    <td>
                                    <Link to={`/view-recipe/${recipe.uid}`}>
                                      {recipe.title}
                                    </Link>
                                    </td>
                                    <td className="text-center">
                                        {recipe.status === 'pending' && <span className="badge bg-warning text-uppercase">PENDING</span> }
                                        {recipe.status === 'approved' && <span className="badge bg-primary text-uppercase">APPROVED</span> }
                                        {recipe.status === 'rejected' && <span className="badge bg-danger text-uppercase">REJECTED</span> }                                        
                                    </td>
                                    <td className="text-center text-nowrap">{new Date(recipe.updated_at).toLocaleString()}</td>
                                    <td className="text-center text-nowrap">
                                        <Link to={`/view-recipe/${recipe.uid}`}>
                                          <button type="button" className="btn btn-sm btn-secondary"><i className="fa fa-eye"></i></button>
                                        </Link>&nbsp;
                                        <Link to={`/edit-recipe/${recipe.uid}`}>
                                        <button type="button" className="btn btn-sm btn-secondary"><i className="fa fa-edit"></i></button>
                                        </Link>&nbsp;
                                        <a onClick={() => deleteRecipe(recipe.uid)}>
                                          <button type="button" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i></button>
                                        </a>
                                    </td>
                                  </tr>
                                  
                              )}
                              
                            </tbody>
                          </table>
                      </div>
                    </div>
                    {/*
                    <div className="row">
                      <div className="col-sm-5">
                          <div className="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1
                            to 5 of
                            6 entries
                          </div>
                      </div>
                      <div className="col-sm-7">
                          <div style={{float : "right"}}>
                            <nav>
                                <ul className="pagination">
                                  <li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
                                      <span className="page-link" aria-hidden="true">‹</span>
                                  </li>
                                  <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                                  <li className="page-item"><a className="page-link" href="/recipe?search_by_keywords=&amp;limit=5&amp;page=2">2</a></li>
                                  <li className="page-item">
                                      <a className="page-link" href="/recipe?search_by_keywords=&amp;limit=5&amp;page=2" rel="next" aria-label="Next »">›</a>
                                  </li>
                                </ul>
                            </nav>
                          </div>
                      </div>
                    </div>
                    */}
                </div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Dashboard;
