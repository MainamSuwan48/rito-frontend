import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ProtectedRoute({ children }) {
  const { authUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      toast.error('You need to login to access this page');
      navigate('/');
    }
  }, [authUser, navigate]);

  return authUser ? children : null;
}

export default ProtectedRoute;
