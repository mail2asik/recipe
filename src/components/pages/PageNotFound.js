import React from 'react';

import pageNotFoundImg from '../../assets/images/404.jpeg';

const PageNotFound = () => {
  return (
    <>
      <div className="container h-100">
        <div className="text-center">
          <h1 className="h4 text-gray-900 mb-4">OOPs!</h1>
        </div>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        <img src={pageNotFoundImg} className="img-fluid" />
      </div>
    </>
  );
};

export default PageNotFound;
