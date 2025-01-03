import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({ logoutRequest }) => {
  useEffect(() => {
    logoutRequest();
  }, []);

  return (
    <div>
      <Navigate to="/auth/login" />
    </div>
  );
};

export default Logout;
