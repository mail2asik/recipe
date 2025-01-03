import React, { useState, useEffect } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const Activate = ({ activateRequest }) => {
  const { email, token } = useParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const activate = () => {
    activateRequest({ email, token }).then(
      res => {
        setShowSuccess('Account has been activated successfully');
      },
      err => {
        setShowError(err.message_detail);
      }
    );
  };

  useEffect(() => {
    activate();
  }, []);

  return (
    <div className="container h-100">
      <div className="text-center">
        <h1 className="h4 text-gray-900 mb-4">Account Activation</h1>
      </div>
      <div className="row h-100 justify-content-center align-items-center">
        {!showSuccess && !showError && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {showSuccess && <Alert variant="success">{showSuccess}</Alert>}

        {showError && <Alert variant="danger">{showError}</Alert>}
      </div>
    </div>
  );
};

export default Activate;
