import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  return children;
};

export default PrivateRoute;
