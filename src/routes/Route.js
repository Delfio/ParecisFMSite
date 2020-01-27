import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  initial = false,
  ...rest
}) {

  const Layout = isPrivate? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
