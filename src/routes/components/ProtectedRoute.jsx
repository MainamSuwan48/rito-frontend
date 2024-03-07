import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from '@/utils/local-storage';


function ProtectedRoute({ children }) {
  const token = getToken();
  const { authUser, loading } = useSelector((state) => state.auth);

  return token ? authUser && children : <Navigate to='/' />;
}

export default ProtectedRoute;
