import { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Loading from 'components/Loading';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';

const SignUpPage = lazy(() => import('pages/SignUpPage' /* webpackChunkName: "signup-page" */));
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

      <Suspense fallback={<Loading />}>
        {isRefreshed ? (
          <Routes>
            <Route
              path='/register'
              element={
                <PublicRoute redirectPath='/contacts'>
                  <SignUpPage />
                </PublicRoute>
              }
            />
            <Route
              path='/login'
              element={
                <PublicRoute redirectPath='/contacts'>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path='/contacts'
              element={
                <PrivateRoute redirectPath='/login'>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Navigate replace to='/contacts' />} />
          </Routes>
        ) : (
          <Loading />
        )}
      </Suspense>
    </>
  );
}

export default App;
