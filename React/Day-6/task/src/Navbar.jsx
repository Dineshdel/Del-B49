import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      {/* <NavbarElements /> */}
      <Nav>
        <NavMenu>
          <NavLink to="/All" activeStyle>
            ALL
          </NavLink>
          <NavLink to="/FSD" activeStyle>
            FULL STACK DEVELOPER
          </NavLink>
          <NavLink to="/DataScience" activeStyle>
            DATA SCIENCE
          </NavLink>
          <NavLink to="/CyberSecurity" activeStyle>
            CYBER SECURITY
          </NavLink>
          <NavLink to="/Career" activeStyle>
            CAREER
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
