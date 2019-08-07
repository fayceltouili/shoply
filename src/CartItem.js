
import React, { Component } from "react";
import { Button} from "reactstrap";
import './Item.css'

export default class CartItem extends Component {
	constructor(props) {
		super(props)
		this.state ={
			id: this.props.id,
			name: this.props.name,
			price: this.props.price,
			description: this.props.description
		}
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);

  }

	handleRemoveItem() {
    this.props.removeItem(this.props.id);
	}
	
	handleAddItem() {
    this.props.addItem(this.state);
  }

	render(){
        const {name, price, description,image_url} =this.props
        console.log(this.props)
		return(
			<div className="Item">
				<h3>{name.toUpperCase()}</h3>
				<img src={image_url}></img>
				<p>Price: {price}</p>
				<p>{description}</p>
				<Button onClick={this.handleAddItem}>Add to cart</Button>
				<Button onClick={this.handleRemoveItem}>Remove from cart</Button>
				<hr></hr>
			</div>
		)
	}
}