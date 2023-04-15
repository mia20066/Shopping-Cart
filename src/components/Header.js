import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,

} from "reactstrap";

import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";




const Header = () => { 

 
      const [menuOpen, setMenuOpen] =useState(false);              
      return (
       
      
     
    <Navbar dark  color='#ee6e73' sticky='top' expand='md'>
    <NavbarBrand className="ms-5" href='/'>
    
        <h1 className="mt-1 kk">Lebanon Breeze Restaurant</h1>
     
      </NavbarBrand>
   

      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
     
      <Collapse isOpen={menuOpen} navbar className="rr" >
        <Nav className="ms-auto" navbar>

          <NavItem>
            <NavLink className="nav-link "  to='/'>
          Order Online

            </NavLink>

          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/contact'>
          Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to='/cart'>
          Cart 
            </NavLink>

          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to='/cart'>
           <i className="material-icons">shopping_cart</i>
            </NavLink>

          </NavItem>



        </Nav>
      </Collapse>
    
    </Navbar>
   

  );
  
}

export default Header;
