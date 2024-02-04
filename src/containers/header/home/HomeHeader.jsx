import './homeheader.css';
import React from "react";
import MailImage from '../../../assets/slanted-mail-p-800.png'

function HomeHeader() {
    return(
        <div className='docwire__header'>
            <div className='docwire__header-software'>
                <div className="docwire__header-software-content">
                    <div className="docwire__header-software-content_header">
                        Docwire - DocToText, A Dynamic Text Mining SDK, Built For Any OS
                    </div>
                    <div className="docwire__header-software-content_text">
                        <p>
                            DocToText is a powerful text extraction tool built in C++.
                            With the ability to safely extract structured and unstructured text from nearly all known file formats,
                            DocToText is the perfect solution for anyone who needs to work with large volumes of text.
                            Our tool is powered by the Docwire SDK, ensuring fast and accurate text extraction every time.
                            Whether you're dealing with PDFs, Word documents, or any other file format, DocToText has you covered.
                        </p>
                    </div>
                </div>
                <div className="docwire__header-software-content">
                    <img src={MailImage}  alt="Slanted mail"/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;