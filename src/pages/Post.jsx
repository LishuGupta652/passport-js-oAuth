import React, { useContext } from 'react'
import { posts } from '../data'
import {BlogContext} from "../contextapi/BlogProvider"

const Post = () => {
    const [value] = useContext(BlogContext)
    const post = value[2];
    console.log(post)
    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className="postTitle">{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>

        </div>
    )
}

export default Post
