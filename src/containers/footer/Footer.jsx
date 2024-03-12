import './footer.css';
import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className='docwire__footer'>
            <div className='docwire__footer-content'>
                <div className="docwire__footer-content-links">
                    <Link className="docwire__footer-content-links_link" to="/privacy">Privacy policy</Link>
                    <Link className="docwire__footer-content-links_link" to="/terms-of-service">Term of use</Link>
                </div>
                <h6 className="docwire__footer-content-copyright">
                    © DocWire SDK
                    <br/>
                    © SILVERCODERS Ltd.
                </h6>
            </div>
        </div>
    )

}

export default Footer;