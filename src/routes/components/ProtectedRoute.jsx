import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { authUser, loading } = useSelector((state) => state.auth);
  console.log(authUser);
  if (loading) {
    return <div>Loading...</div>;
  }

  return authUser ? children : <Navigate to='/' />;
}

export default ProtectedRoute;