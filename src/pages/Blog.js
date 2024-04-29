import {Footer, Nav, PostList} from "../containers";
import React from "react";

function Blog() {
    document.title = "Blog | Docwire"
    return (
        <div>
            <Nav />
            <PostList/>
            <Footer />
        </div>
    )
}

export default Blog;