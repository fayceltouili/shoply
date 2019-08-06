import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import {add, remove} from  "./actions";
import './App.css';
import Item from './ProductDetails';
import NavBar from './NavBar';
import ProductList from './ProductList'

export default class App extends Component{

  
  render(){
    return(
      <BrowserRouter>
        <NavBar />
        <ProductList/>
      </BrowserRouter>
    );
  }
}
