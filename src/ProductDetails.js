
import React, { Component } from "react";
// import './ProductDetails.css'

export default class ProductDetails extends Component {

	render(){
		const {name,image_url} =this.props
		return(
			<div className="Item">
				<h3>{name.toUpperCase()}</h3>
				<img src={image_url}></img>
				<hr></hr>
			</div>
		)
	}
}