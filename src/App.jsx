import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Loading from 'components/Loading';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';

const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page" */),
);
const LoginPage = lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page" */));
const ContactsPage = lazy(() =>
  import('pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isRefreshed = useSelector(authSelectors.getIsRefreshed);

  useEffect(() => dispatch(authOperations.fetchCurrentUser()), [dispatch]);

  return (
    <>
      <AppBar />

      {isRefreshed ? (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route
              path='/register'
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path='/login'
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Navigate replace to='/contacts' />} />
          </Routes>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
