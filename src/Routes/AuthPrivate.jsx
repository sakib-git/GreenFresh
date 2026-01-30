import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AuthPrivate = ({ children }) => {
  const { user } = useAuth();

  if (user) return <Navigate to="/" replace />;
  return children;
};

export default AuthPrivate;
