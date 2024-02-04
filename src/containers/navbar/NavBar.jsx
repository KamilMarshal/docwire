import './navbar.css';
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from '../../assets/logoDocWire.JPG'

const Menu = () =>(
        <>
            <p><Link to="/product">Product</Link></p>
            <p><Link to="/showcases">Showcases</Link></p>
            <p><Link to="/license">License</Link></p>
            <p><Link to="/resources">Resources</Link></p>
        </>
    )
/*'../../../public/index.html'*/
function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="docwire__navbar">
            <div className="docwire__navbar-links_logo">
                <Link to="/"><img src={logo} alt="DocWire logo"/></Link>
            </div>
            <div className="docwire__navbar-links_container">
                <Menu />
            </div>
            <div className='docwire__navbar-getintouch'>
                <button>Get in touch</button>
            </div>
            <div className="docwire__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color='white' size={27} onClick={()=> setToggleMenu(false)} />
                    : <RiMenu3Line color='white' size={27} onClick={()=> setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='docwire__navbar-menu_container scale-up-center'>
                        <div className='docwire__navbar-menu_container-links'>
                            <Menu />
                        </div>
                        <div className="docwire__navbar-menu_container-links-getintouch">
                            <button>Get in touch</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;