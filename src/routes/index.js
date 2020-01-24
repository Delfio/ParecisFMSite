import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Inital from '../pages/Inicial'

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={Inital}/>
    </Switch>
  );
}
