import "./wingssection.css";
import React from "react";
import Wings from "../../../assets/Wings.png"

function WingsSection() {
    return (
        <div className="docwire__wingssection">
            <div className="docwire__wingssection-container">
                <div className="docwire__wingssection-container_text">
                    <h3>
                        DocToText is a light-weight, secure C++ text miner optimized for any tech stack
                    </h3>
                    <p>
                        DocToText is a light-weight, secure C++ text miner that is optimized for any tech stack. With
                        our
                        powerful libraries, you can implement lightning-fast text extraction that seamlessly blends with
                        your current build, saving both time and money. Our C++ libraries are designed to handle any
                        file
                        format, including docx, PDF, and pst/ost files, making it easy to extract text from even the
                        most
                        complex documents. Try DocToText today and experience the power of efficient and accurate text
                        extraction with our optimized C++ libraries.
                    </p>
                </div>
                <div className="docwire__wingssection-container_wings">
                    <img src={Wings} alt="Floating Wings" />
                </div>
            </div>
        </div>
    )

}

export default WingsSection;