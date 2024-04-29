import './infosection.css'
import Formats from "../../../assets/Formats-transparent-p-1600.png";
import React from "react";

function InfoSection() {
    return (
        <div className="docwire__info">
            <div className="docwire__info-intro_section1">
                <h1>So, what can it do?</h1>
                <h2>Well let us show you</h2>
            </div>
            <div className="docwire__info-intro_section2">
                <div className="docwire__info-intro_section2-text">
                    <div className="docwire__info-top">
                        <h3>Process data from all popular formats</h3>
                        <p>No matter if it’s scanned reports or structured excel sheets, the Docwire SDK helps you
                            identify and extract the data you need.</p>
                    </div>
                    <div className="docwire__info-bottom">
                        <h4>Supported formats</h4>
                        <p>docx, xlsx, pptx, doc, xls, xlsb, ppt, odt, ods, odp, pdf, html, htm, css, rtf, eml, ms
                            outlook pst, ost, jpg, jpeg, jfif, bmp, pnm, png, tiff, webp, pages, numbers, keynote,
                            odfxml (fodp, fods, fodt), zip, tar, rar, gz, bz2, xz, asm, asp, aspx, bas, bat, c, cc,
                            cmake, cs, cpp, cxx, d, f, fpp, fs, go, h, hpp, hxx, java, js, jsp, lua, pas, php, pl, perl,
                            py, r, sh, tcl, vb, vbs, ws, xml, xsd, xsl, csv, json, yml, yaml, rss, conf, md, log, dcm
                            and more!</p>
                    </div>
                </div>
                <div className="docwire__info-intro_section2-gradient">
                    <img src={Formats} alt="Floating Wings"/>
                </div>
            </div>
        </div>
    )
}

export default InfoSection;