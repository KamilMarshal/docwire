import React from "react";
import './postlist.css'
import postlist from '../../../posts.json'
import {ShortPostTemplate} from "../../index";

const PostList = (props) => {
    return (
        <div className="docwire__postList">
            <div className="docwire__postList_blog-container">
                {postlist.length &&
                    postlist.map((post, i) => {
                        return (
                            <ShortPostTemplate key={i} props={post}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostList;