import React, {Component} from 'react';
import { connect } from "react-redux";
import {add, remove} from  "./actions";
import { Link } from "react-router-dom";
import './ProducstList.css';

class ProductList extends Component{


  render(){
    const products = this.props.products;
    console.log(this.props)
			const productsCard = Object.keys(products).map(id => {
				const product = products[id];
				return(
				<div className="mb-2 mr-sm-2 mb-sm-0">
					<Link to={`/Products/${id}`}>
					<h3 className="mt-3">
						{product.name}
					</h3>
					<img src={product.image_url} alt={product.name} />
					</Link>
					<hr></hr>
				</div>
				)
			})
			return(
				<div inline>
				{productsCard}
				</div>
			)
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
