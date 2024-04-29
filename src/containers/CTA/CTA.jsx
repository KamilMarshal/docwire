import './cta.css';
import React from "react";

function CTA() {
    return (
        <div className='docwire__cta'>
            <div className='docwire__cta-background'>
                <div className='docwire__cta-background_banner'>
                    <div className='docwire__cta-content'>
                        <h3>Public Binaries</h3>
                        <p>Have a go and experiment with our non-commerical license, without trial periods or gated
                            functions!</p>
                    </div>
                </div>
                <div className="docwire__cta-button">
                    <a href="https://github.com/docwire/docwire/releases" target="_blank" rel="noreferrer">Download Binaries</a>
                </div>
            </div>
        </div>
    )
}

export default CTA;