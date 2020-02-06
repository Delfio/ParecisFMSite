import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Inital from '../pages/Inicial'
import Main from '../pages/Main';
import Dashboard from '../pages/Dashboard';

import Login from '../pages/auth/login';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inital}/>
      <Route path="/radio/:id" exact component={Main}/>

      <Route path="/painel" exact isPrivate component={Dashboard}/>

      <Route path="/login" login component={Login}/>
    </Switch>
  );
}
