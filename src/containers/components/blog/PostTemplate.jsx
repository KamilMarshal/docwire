import './posttemplate.css'
import {useParams, Navigate, Link} from 'react-router-dom'
import postlist from '../../../posts.json'
import Markdown from "markdown-to-jsx";
import {HiChevronRight} from "react-icons/hi";
import NavBar from "../../navbar/NavBar";
import {Footer} from "../../index";
import Code from './Code'
import {createContext, useState} from "react";
import CTAContact from "../../CTA/CTA-contact";

export const ThemeContext = createContext(true);

function PostTemplate() {
    const props = useParams()
    const validId = parseInt(props.id)
    if (isNaN(validId)) {
        return <Navigate to="/error404"/>
    }

    let fetchPost = {}

    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchPost = post
        }
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDark, setIsDark] = useState(true);

    const value = {
        isDark, setIsDark
    }

    const currentIndex = postlist.findIndex(post => post.id === fetchPost.id);
    const hasPrevious = currentIndex > 0;
    const hasNext = currentIndex < postlist.length - 1;

    const previousPostId = hasPrevious ? postlist[currentIndex - 1].id : null;
    const nextPostId = hasNext ? postlist[currentIndex + 1].id : null;

    const linkPrev = `/blog/${previousPostId}`
    const linkNext = `/blog/${nextPostId}`

    return (
        <ThemeContext.Provider value={value}>
            <div>
                <NavBar/>
                <div className="docwire__full-post-template">
                    <div className="docwire__full-post-template_main">
                        <div className="docwire__full-post-template_nav">
                            <Link className="docwire__full-post-template_link" to="/Blog">Docwire Blog</Link>
                            <HiChevronRight className="iconType"/>
                            <p className="docwire__full-post-template_link">{fetchPost.title}</p>
                        </div>
                        <div className="docwire__full-post-template_main-contents">
                            <div className="docwire__full-post-template_title">
                                <div className="docwire__full-post-template_title-img">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={require(`../../../assets/${fetchPost.preview}`)}
                                         alt="Blog preview image"/>
                                </div>
                                <div className="docwire__full-post-template_title-text">
                                    <div className="docwire__full-post-template_title-text-h1">
                                        <h1>{fetchPost.title}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="docwire__full-post-template_credentials">
                                <div className="docwire__full-post-template_credentials-author">
                                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                                    <img src={require(`../../../assets/${fetchPost.authorImage}`)} alt="Author image"/>
                                    <div className="docwire__full-post-template_credentials-author-text">
                                        <p>{fetchPost.author}</p>
                                        <time dateTime={fetchPost.date}>{fetchPost.date}</time>
                                    </div>
                                </div>
                            </div>
                            <div className="docwire__full-post-template_md-content">
                                <Markdown options={{
                                    overrides: {
                                        code: {
                                            component: Code
                                        }
                                    }
                                }}>{fetchPost.content}</Markdown>
                            </div>

                        </div>
                        <div className={`docwire__full-post-template_buttons ${
                            hasPrevious && hasNext ? "both" : (hasPrevious ? "prev" : "next")}`}>
                            {
                                hasPrevious && (
                                    <Link to={linkPrev}>
                                        <div className={`docwire__full-post-template_buttons-btn ${hasPrevious ? "" : "hidden"}`}>
                                            Previous post
                                        </div>
                                    </Link>
                                )
                            } {
                                hasNext && (
                                    <Link to={linkNext}>
                                        <div className={`docwire__full-post-template_buttons-btn ${hasNext ? "" : "hidden"}`}>
                                        Next post
                                        </div>
                                    </Link>

                            )
                        }
                        </div>
                    </div>
                </div>
                <CTAContact />
                <Footer/>
            </div>
        </ThemeContext.Provider>
    )
}

export default PostTemplate;