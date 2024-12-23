import React from 'react';
import { Navigate } from 'react-router-dom';

// Higher-order component for protected routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Check for the token in localStorage (or cookies if preferred)

  // If token is missing, redirect to the sign-in page
  return token ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
