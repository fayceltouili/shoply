import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Products" render={ProductLis}/>
        <Route path="/Products/:id" render={ProductDetails} />
        <Redirect to="/Products" />
      </Switch>
    );
  }
}

export default Routes;
