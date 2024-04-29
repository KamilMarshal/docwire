import './navbar.css';
import React, { useState } from "react";
import {Link} from "react-router-dom";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logoDocWire.JPG'


function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)


    return (
        <div className="docwire__navbar">
            <div className="docwire__navbar-links_logo">
                <Link to="/"><img src={logo} alt="DocWire logo"/></Link>
            </div>
            <div className="docwire__navbar-links_container">
                <p><Link to="/about-us">About Us</Link></p>
                <p><Link to="/blog">Blog</Link></p>
                <p><Link to="/showcases">Showcases</Link></p>
                <p><Link to="https://docwire.readthedocs.io/en/latest/" target="_blank">Documentation</Link></p>
                <p><Link to="https://github.com/docwire/docwire/releases" target="_blank">Binaries</Link></p>
            </div>
            <div className='docwire__navbar-getintouch'>
                <button><Link to="/contact-us">Contact Us</Link></button>
            </div>
            <div className="docwire__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='docwire__navbar-menu_container scale-up-center'>
                        <div className='docwire__navbar-menu_container-links'>
                            <p><Link to="/about-us">About Us</Link></p>
                            <p><Link to="/blog">Blog</Link></p>
                            <p><Link to="/showcases">Showcases</Link></p>
                            <p><Link to="https://docwire.readthedocs.io/en/latest/" target="_blank">Documentation</Link></p>
                            <p><Link to="https://github.com/docwire/docwire/releases" target="_blank">Binaries</Link></p>
                        </div>
                        <div className="docwire__navbar-menu_container-links-getintouch">
                            <button><Link to="/contact-us">Contact Us</Link></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;