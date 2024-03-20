import React from "react";
import './postlist.css'
import postlist from '../../../posts.json'
import {ShortPostTemplate} from "../../index";

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 40).join(" ") + "..."
    })
    return (
        <div className="docwire__postList">
            <div className="docwire__postList_blog-container">
                {postlist.length &&
                    postlist.map((post, i) => {
                        return (
                            <ShortPostTemplate props={post} content={excerptList[i]}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostList;