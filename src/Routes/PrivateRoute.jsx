import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default PrivateRoute;
