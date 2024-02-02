import './navbar.css';
import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logoDocWire.JPG'

function NavBar() {
    return (
        <div className="docwire__navbar">
            <div className="docwire__navbar-links_logo">
                <img src={logo} alt="DocWire logo"/>
            </div>
            <div className="docwire__navbar-links_container">
                <p><a href="#product">Product</a></p>
                <p><a href="#showcases">Showcases</a></p>
                <p><a href="#license">License</a></p>
                <p><a href="#resources">Resources</a></p>
            </div>
            <div className='docwire__navbar-getintouch'>
                <button>Get in touch</button>
            </div>
        </div>
    )
}

export default NavBar;