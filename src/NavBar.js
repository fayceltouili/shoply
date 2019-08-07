import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
	NavItem} from 'reactstrap';
	import {Link} from 'react-router-dom'

import { NavLink } from "react-router-dom"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div>
					
          <Navbar color="light" light expand="md">
            <NavbarBrand >
							<Link to="/" style={{textDecoration: 'none'}}>SHOPLY </Link>
						</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/products" style={{textDecoration: 'none'}}>Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cart" style={{textDecoration: 'none', marginLeft: '10px'}}>Cart</NavLink>
            </NavItem>
          </Nav>
            </Collapse>
          </Navbar>
          
        </div>
    );
  }

 
}

