<<<<<<< HEAD
=======

>>>>>>> 392a323ea2e42afb8be305df86ebef12fcd2d592
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { authUser, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authUser ? children : <Navigate to='/' />;
}

export default ProtectedRoute;