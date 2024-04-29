import './cta.css';
import React from "react";
import {Link} from "react-router-dom";

function CTAcontact() {
    return (
        <div className='docwire__cta'>
            <div className='docwire__cta-background'>
                <div className='docwire__cta-background_banner'>
                    <div className='docwire__cta-content'>
                        <h3>Give our demo a try</h3>
                        <p>Have a go and experiment with our non-commerical license, without trial periods or gated
                            functions!</p>
                    </div>
                </div>
                <div className="docwire__cta-button">
                    <Link to="/contact-us">Get licence</Link>
                </div>
            </div>
        </div>
    )
}

export default CTAcontact;