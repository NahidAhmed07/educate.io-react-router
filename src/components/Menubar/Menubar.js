import React, { useContext } from "react";
import "./Menubar.css";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { CartContext } from "../../App";

const Menubar = () => {
  const [cart] = useContext(CartContext);
  const history = useHistory();
  return (
    <Navbar
      className="container-fluid sticky-top px-5 py-0 text-white"
      style={{ backgroundColor: "#2C91FB" }}
      variant="dark"
      expand="lg"
    >
      <Navbar.Brand href="#">Educate.io</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
          {/* Nav Rout link  */}
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/home"
          >
            HOME
          </NavLink>

          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/services"
          >
            SERVICES
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/about"
          >
            ABOUT US
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/contact"
          >
            CONTACT US
          </NavLink>
          <NavLink
            className="nav-item"
            activeClassName="active-nav-item"
            to="/cart"
          >
            VIEW CART
          </NavLink>
          {/* navbar icons  */}
        </Nav>
        <div className="d-flex ms-auto my-4 my-md-0">
          <div class=" position-relative">
            <i className="fas fa-shopping-cart me-4 nav-icon position-relative"></i>
            <span class="position-absolute top-0 start-0  translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </div>
          
          <div>
            <i className="far fa-bell me-4 nav-icon"></i>
          </div>
          <div>
            <i className="fas fa-sign-in-alt me-4 nav-icon"></i>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menubar;
