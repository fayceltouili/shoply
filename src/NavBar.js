import React, {Component} from "react"
import {NavLink} from "react-router-dom"
import "./NavBar.css"

class NavBar extends Component {
  render() {
   
    return (
      <nav>
        <NavLink exact to="/products">Home</NavLink>
        <NavLink exact to="/cart">Cart</NavLink>
     </nav>
    );
  }
}

export default NavBar;