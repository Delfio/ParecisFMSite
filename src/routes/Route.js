import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import {store} from '../store';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  login = false,
  ...rest
}) {

  const signed =  store.getState().auth.signed;

  if(!signed && isPrivate){
    return <Redirect to="/login" />
  }

  if(signed && login){
    return <Redirect to="/painel" />
  }

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


RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  login: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
  login: false,
}