import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext.js';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn, isAuthLoading } = useAuth();
  const location = useLocation();

  if (isAuthLoading) return null;

  if (!isLoggedIn) {
    return <Navigate to="/signin" replace state={{ from: location }} />;
  }

  return children;
}
