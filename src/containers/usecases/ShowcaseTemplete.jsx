import './showcaseTemplate.css'
import NavBar from "../navbar/NavBar";
import {Link, Navigate, useParams} from "react-router-dom";
import {HiExternalLink, HiArrowRight} from "react-icons/hi";
import {CTAcontact, Footer} from "../index";
import {data} from "../../pages/Showcases/data";

function ShowcaseTemplate() {
    const props = useParams();
    let showcase = {}

    showcase = data.find((show) => show.linkName === props.link)
    if (showcase === undefined) {
        return <Navigate to="/error404"/>
    }
    return (<>
            <NavBar/>
            <div className="docwire__showcase-template">
                <div className="docwire__showcase-template_header">
                    <h1>{showcase.companyName}</h1>
                    <h2>{showcase.subtitle}</h2>
                    <div className="docwire__showcase-template_header-buttons">
                        <Link to={showcase.website} className="link" target="_blank">
                            <div>Website</div>
                            <HiExternalLink className="icon"/>
                        </Link>
                        <Link to="/contact-us" className="cta">Get licence</Link>
                    </div>
                </div>
                <div className="docwire__showcase-template_content">
                    <div className="docwire__showcase-template_content-left">
                        <div className="top_left">
                            <img src={require(`../../assets/${showcase.image}`)} alt={showcase.companyName}/>
                            <p>{showcase.whoWeAre}</p>
                        </div>
                        <Link to="/showcases">
                            <div className="text">Other showcases</div>
                            <div className="arrow"><HiArrowRight/></div>
                        </Link>
                    </div>
                    <div className="docwire__showcase-template_content-right">
                        <div className="question"><h4>What is {showcase.companyName}</h4></div>
                        <div className="answer"><p>{showcase.whatIs}</p></div>

                        <div className="question"><h4>Why were Docwire approached?</h4></div>
                        <div className="answer"><p>{showcase.WhyWereDocwireApproached}</p></div>

                        <div className="question"><h4>What did we do?</h4></div>
                        <div className="answer"><p>{showcase.WhatDidWeDo}</p></div>

                        <div className="question"><h4>What were the results?</h4></div>
                        <div className="answer"><p>{showcase.WhatWereTheResults}</p></div>
                    </div>
                </div>
            </div>
            <CTAcontact/>
            <Footer/>
        </>

    )
}


export default ShowcaseTemplate;