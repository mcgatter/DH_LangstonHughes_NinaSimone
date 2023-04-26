import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/analysis" activeStyle>
            Analysis
          </NavLink>
          <NavLink to="/collection" activeStyle>
            Collection
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;