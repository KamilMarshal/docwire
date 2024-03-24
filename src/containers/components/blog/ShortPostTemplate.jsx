import './shortposttemplate.css'
import {Link} from "react-router-dom";
import {HiArrowRight} from "react-icons/hi";
import Markdown from "react-markdown";

function ShortPostTemplate(props) {
    props = props.props
    const link = "/blog/" + props.id
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
                        <p><Markdown children={props.introduction}/></p>
                    </div>
                    <div className="docwire__short-post-template_left-link">
                        <Link to={link}>
                            <div className="docwire__short-post-template_left-link_read">Read article</div>
                            <div className="docwire__short-post-template_left-link_arrow"><HiArrowRight/></div>
                        </Link>
                    </div>
                </div>
                    <div className="docwire__short-post-template_right">
                    <div className="docwire__short-post-template_right-author">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={require(`../../../assets/${props.authorImage}`)} alt="Author image"/>
                        <div className="docwire__short-post-template_right-author_name">
                            <h5>{props.author}</h5>
                        </div>
                    </div>
                    <div className="docwire__short-post-template_right-image">
                        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                        <img src={require(`../../../assets/${props.preview}`)} alt="Blog preview image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShortPostTemplate;