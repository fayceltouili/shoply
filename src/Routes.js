import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Cart from './Cart';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <ProductList/>}/>
				<Route exact path="/products"	 render={() => <ProductList/>}/>
				<Route exact path="/products/:id" render={(routerProps) => <ProductDetails {...routerProps}/> }/>	
				<Route exact path="/cart"	 render={() => <Cart/>}/>
        <Redirect to="/products" />
      </Switch>
    );
  }
}


export default Routes
  
