import './navbar.css';
import React from "react";
import {NavDropdown, NavLogo} from "../../components";

function NavBar() {
    return (
        <div className="Nav">
            <NavLogo />
            <NavDropdown />
        </div>
    )
}

export default NavBar;