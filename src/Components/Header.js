import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar className='navbar-color' variant="dark">
      <Navbar.Brand>Logo</Navbar.Brand>
    </Navbar>
  );
}

export default Header;