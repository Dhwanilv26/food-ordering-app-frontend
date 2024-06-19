import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (isAuthenticated) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default ProtectedRoute;
