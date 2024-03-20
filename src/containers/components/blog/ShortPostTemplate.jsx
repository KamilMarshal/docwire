import './shortposttemplate.css'
import {Link} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";
import Markdown from "react-markdown";

function ShortPostTemplate(props) {
    let content = props.content
    props = props.props
    return (
        <div className="docwire__short-post-template">
            <div className="docwire__short-post-template_top">
                <h5>{props.date}</h5>
                <div className="dot"></div>
            </div>
            <div className="docwire__short-post-template_bottom">
                <div className="docwire__short-post-template_left">
                    <div className="docwire__short-post-template_left-content">
                        <h1>{props.title}</h1>
                        <p><Markdown children={content}/></p>
                    </div>
                    <div className="docwire__short-post-template_left-link">
                        <Link to="read-article">
                            <div className="docwire__short-post-template_left-link_read">Read article</div>
                            <div className="docwire__short-post-template_left-link_arrow"><HiArrowRight/></div>
                        </Link>
                    </div>
                </div>
                <div className="docwire__short-post-template_right">
                    <div className="docwire__short-post-template_right-author">
                        <img src={require(`../../../assets/${props.authorImage}`)} alt="Author image"/>
                        <div className="docwire__short-post-template_right-author_name"></div>
                    </div>
                    <div className="docwire__short-post-template_right-image">
                        <img src={require(`../../../assets/${props.preview}`)} alt="Blog preview image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortPostTemplate;