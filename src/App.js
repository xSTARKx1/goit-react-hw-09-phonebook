import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView' /*webpackChunkName: "homeView"*/),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /*webpackChunkName: "ContactsView"*/),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /*webpackChunkName: "RegisterView"*/),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /*webpackChunkName: "LoginView"*/),
);
const NotFound = lazy(() =>
  import('./views/NotFound' /*webpackChunkName: "NotFound"*/),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
