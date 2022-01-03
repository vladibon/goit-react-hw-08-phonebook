import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

function PublicRoute({ children, redirectPath = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate replace to={redirectPath} /> : children;
}

export default PublicRoute;
