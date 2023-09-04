import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
        <NavbarElements />
            <Nav>
                <NavMenu>
                    <NavLink to="/All" activeStyle>
                        All
                    </NavLink>
                    <NavLink to="/FSD" activeStyle>
                        Full Stack Developer
                    </NavLink>
                    <NavLink to="/DataScience" activeStyle>
                        Data Science
                    </NavLink>
                    <NavLink to="/CyberSecurity" activeStyle>
                        Cyber Security
                    </NavLink>
                    <NavLink to="/Career" activeStyle>
                        Career
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;