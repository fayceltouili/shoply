import React, {Component} from 'react';
import { connect } from "react-redux";
import {add, remove} from  "./actions";
import { Table } from 'reactstrap';
import './App.css';
import { Link } from "react-router-dom";

import CartItem from './CartItem';

class Cart extends Component{
  constructor(props){
    super(props);
    this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this)
		this.renderTable = this.renderTable.bind(this);
  }
  addItem(id){ this.props.add(id)}
  removeItem(id){ this.props.remove(id)}

  renderTable(){
		const { cart, products} = this.props;

		const itemsRow = Object.keys(cart).map(id => {
			let product = products[id];
			console.log('product',product)
			return(
				<tr key={id}>
					<td>
					<Link to={`products/${id}`}>
					<img src={product.image_url} style={{maxWidth: "40px"}}></img>
					</Link>
					</td>
					<td>{product.name}</td>
					<td>{cart[id]}</td>
					<td>{product.price}</td>
					<td>
						<button onClick={this.addItem}>+</button>
						<button onClick={this.removeItem}>-</button>

					</td>
				</tr>
			);
		})

		return(
			<Table>
				<thead>
					<th></th>
					<th>Name</th>
					<th>Qty</th>
					<th>Price</th>
				</thead>
				<tbody>
					{itemsRow}
				</tbody>
			</Table>

		)
    
	}
	
	render() {
		const cart = this.props.cart;
		console.log('length', Object.keys(cart).length)
		if(Object.keys(cart).length > 0) {
			return(
				<div>
				{this.renderTable()}
				</div>
			);
		}
		else 
			return(
				<div>
					<h2>Your list is empty!</h2>
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

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
