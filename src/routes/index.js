import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Inital from '../pages/Inicial'

import Main from '../pages/Main'

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inital}/>
      <Route path="/radio/:id" exact component={Main}/>
    </Switch>
  );
}
