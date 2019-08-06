import React, {Component} from 'react';
import { connect } from "react-redux";
import {add, remove} from  "./actions";
import { Link } from "react-router-dom";
import './App.css';
import Item from './ProductDetails';

class ProductList extends Component{
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this)
  }
  addItem(item){ this.props.add(item)}
  removeItem(id){ this.props.remove(id)}

  render(){
    console.log('cart..',this.props.cart)
    const products = this.props.products;
    return(
			Object.entries(products).map(item => (
				<div className="col-3 text-center" key={item[0]}>
					<Link to={`/Products/${item[0]}`}>
					<h3 className="mt-3">
						{item[1].name}
					</h3>
					<img src={item[1].image_url} alt={item[1].name} />
					</Link>
				</div>
			))
		);
		
		

  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

const mapDispatchToProps = {
  add,
  remove,
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);
