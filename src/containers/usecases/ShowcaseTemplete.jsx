import './showcaseTemplate.css'
import NavBar from "../navbar/NavBar";
import {Link} from "react-router-dom";
import {HiExternalLink, HiArrowRight} from "react-icons/hi";
import {CTAcontact, Footer} from "../index";

function ShowcaseTemplate(props) {
    props = props.props
    return (<>
            <NavBar/>
            <div className="docwire__showcase-template">
                <div className="docwire__showcase-template_header">
                    <h1>{props.companyName}</h1>
                    <h2>{props.subtitle}</h2>
                    <div className="docwire__showcase-template_header-buttons">
                        <Link to={props.website} className="link" target="_blank">
                            <div>Website</div>
                            <HiExternalLink className="icon"/>
                        </Link>
                        <Link to="/contact-us" className="cta">Get licence</Link>
                    </div>
                </div>
                <div className="docwire__showcase-template_content">
                    <div className="docwire__showcase-template_content-left">
                        <div className="top_left">
                            <img src={require(`../../assets/${props.image}`)} alt={props.companyName}/>
                            <p>{props.whoWeAre}</p>
                        </div>
                        <Link to="/showcases">
                            <div className="text">Other showcases</div>
                            <div className="arrow"><HiArrowRight/></div>
                        </Link>
                    </div>
                    <div className="docwire__showcase-template_content-right">
                        <div className="question"><h4>What is {props.companyName}</h4></div>
                        <div className="answer"><p>{props.whatIs}</p></div>

                        <div className="question"><h4>Why were Docwire approached?</h4></div>
                        <div className="answer"><p>{props.WhyWereDocwireApproached}</p></div>

                        <div className="question"><h4>What did we do?</h4></div>
                        <div className="answer"><p>{props.WhatDidWeDo}</p></div>

                        <div className="question"><h4>What were the results?</h4></div>
                        <div className="answer"><p>{props.WhatWereTheResults}</p></div>
                    </div>
                </div>
            </div>
            <CTAcontact/>
            <Footer/>
        </>

    )
}

export default ShowcaseTemplate;