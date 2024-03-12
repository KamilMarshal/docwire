import {Link} from "react-router-dom";
import React from "react";
import './nopagecomponent.css'

function NoPageComponent() {
    return (
        <div className="docwire__nopage">
            <div className="docwire__nopage-content">
                <div className="docwire__nopage-content404">
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
                <button><Link to="/">Homepage</Link></button>
            </div>
        </div>
    )
}

export default NoPageComponent;