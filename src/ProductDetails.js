

import React, { Component } from "react";
import { Button} from "reactstrap";
import { connect } from "react-redux";
import {add, remove} from  "./actions";

// import './Item.css'
class ProductDetails extends Component {
	constructor(props) {
		super(props)
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

  }
	handleRemoveItem() {
    this.props.remove(this.props.product.id);
	}
	
	handleAddItem() {
    this.props.add(this.props.product.id);
  }

	render(){
		const {name, price, description,image_url} = this.props.product
		return(
			<div className="Item">
				<h3>{name.toUpperCase()}</h3>
				<img src={image_url}></img>
				<p>Price: {price}</p>
				<p>{description}</p>
				<Button color="success" onClick={this.handleAddItem}>Add</Button>
				<Button color="danger" style={{marginLeft: "10px"}}onClick={this.handleRemoveItem}>Remove</Button>
				<hr></hr>
			</div>
		)
	}
}

// go to the redux store - find a product by
// this.props.params.match.id 

function mapStateToProps(reduxState, ownProps){
	const products = reduxState.products;
	let product = Object.entries(products).find(item => item[0]=== ownProps.match.params.id)[1]
	product = {...product, id: ownProps.match.params.id, qty: 0 }

	return {
		product
	}
}

const mapDispatchToProps = {
  add,
  remove,
};

export default connect(mapStateToProps,mapDispatchToProps)(ProductDetails);


