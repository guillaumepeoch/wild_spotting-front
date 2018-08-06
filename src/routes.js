import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home'

const Routes = function(){
  return(
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/Spot' exact component={Home}/>
    </Switch>
  );
}

export default Routes;
