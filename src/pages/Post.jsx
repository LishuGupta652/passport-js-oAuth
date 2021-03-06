import React, { useContext } from 'react'
import { posts } from '../data'
import {BlogContext} from "../contextapi/BlogProvider"
import { useLocation } from 'react-router'

const Post = () => {
    const [posts] = useContext(BlogContext)
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    
    const post = posts.find(p => p.id.toString() === path)

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
