import './navlogo.css';
import React from "react";
import logo from '../../assets/logoDocWire.JPG'

function NavLogo() {
    return(
        <div className='navlogo'>
            <img src={logo} className='navlogo__img' alt='DocWire logo' />
        </div>
    )

}

export default NavLogo;