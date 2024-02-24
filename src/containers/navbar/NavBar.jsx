import './navbar.css';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from '../../assets/logoDocWire.JPG'


function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
    }, []);


    return (
        <div className={`${sticky ? "docwire__navbar sticky" : "docwire__navbar"}`}>
            <div className="docwire__navbar-links_logo">
                <Link to="/"><img src={logo} alt="DocWire logo"/></Link>
            </div>
            <div className="docwire__navbar-links_container">
                <p><Link to="/about-us">About Us</Link></p>
                <p><Link to="/blog">Blog</Link></p>
                <p><Link to="/documentation">Documentation</Link></p>
                <p><Link to="/binaries">Binaries</Link></p>
            </div>
            <div className='docwire__navbar-getintouch'>
                <button><Link to="/contact-us">Get license</Link></button>
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
                            <p><Link to="/documentation">Documentation</Link></p>
                            <p><Link to="/binaries">Binaries</Link></p>
                        </div>
                        <div className="docwire__navbar-menu_container-links-getintouch">
                            <button><Link to="/contact-us">Get license</Link></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;